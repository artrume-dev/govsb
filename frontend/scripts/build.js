import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 5173;
const MAX_RETRIES = 15; // 15 seconds max wait time (reduced for CI/CD)
const RETRY_INTERVAL = 500; // 0.5 second between retries (faster polling)

// ANSI color codes for better logging
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

// Run a command and wait for it to complete
function runCommand(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    log(`\n→ Running: ${command} ${args.join(' ')}`, colors.cyan);

    const child = spawn(command, args, {
      stdio: 'inherit',
      shell: true,
      ...options
    });

    child.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`Command failed with exit code ${code}`));
      } else {
        resolve();
      }
    });

    child.on('error', (error) => {
      reject(error);
    });
  });
}

// Check if server is ready by making HTTP request
function checkServerReady(port) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:${port}`, (res) => {
      resolve(res.statusCode === 200);
    });

    req.on('error', () => {
      resolve(false);
    });

    req.setTimeout(1000, () => {
      req.destroy();
      resolve(false);
    });
  });
}

// Wait for server to be ready with retries
async function waitForServer(port, maxRetries = MAX_RETRIES) {
  log(`\n→ Waiting for preview server on port ${port}...`, colors.yellow);

  for (let i = 0; i < maxRetries; i++) {
    const isReady = await checkServerReady(port);
    if (isReady) {
      log(`✓ Preview server is ready!`, colors.green);
      return true;
    }

    if (i < maxRetries - 1) {
      await new Promise(resolve => setTimeout(resolve, RETRY_INTERVAL));
    }
  }

  throw new Error(`Server failed to become ready after ${maxRetries} seconds`);
}

// Main build process
async function build() {
  let previewServer = null;

  try {
    // Step 1: Run Vite build
    log('\n========================================', colors.cyan);
    log('STEP 1: Building with Vite', colors.cyan);
    log('========================================', colors.cyan);
    await runCommand('npm', ['run', 'build:csr']);
    log('✓ Vite build completed successfully!', colors.green);

    // Check if running on Railway or Vercel - skip pre-rendering to avoid timeout/missing Chrome
    if (process.env.RAILWAY_ENVIRONMENT || process.env.RAILWAY_SERVICE_NAME || process.env.VERCEL || process.env.VERCEL_ENV) {
      const platform = process.env.VERCEL || process.env.VERCEL_ENV ? 'VERCEL' : 'RAILWAY';
      log('\n========================================', colors.yellow);
      log(`⚠️  ${platform} DETECTED: Skipping pre-rendering`, colors.yellow);
      log('========================================', colors.yellow);
      log(`   SSG disabled on ${platform} platform`, colors.yellow);
      log('   Pages will use Client-Side Rendering (CSR)', colors.yellow);
      log('   SEO meta tags still work via React Helmet', colors.yellow);
      log('\n========================================', colors.green);
      log('✓ BUILD COMPLETED (CSR MODE)', colors.green);
      log('========================================', colors.green);
      return;
    }

    // Step 2: Start preview server
    log('\n========================================', colors.cyan);
    log('STEP 2: Starting preview server', colors.cyan);
    log('========================================', colors.cyan);

    previewServer = spawn('npm', ['run', 'preview'], {
      stdio: 'pipe',
      shell: true,
      env: { ...process.env, PORT: String(PORT) }
    });

    // Capture preview server output for debugging
    previewServer.stdout.on('data', (data) => {
      const output = data.toString();
      if (output.includes('Local:') || output.includes('Network:')) {
        log(output.trim(), colors.yellow);
      }
    });

    previewServer.stderr.on('data', (data) => {
      console.error(data.toString());
    });

    // Wait for server to be ready
    await waitForServer(PORT);

    // Step 3: Run prerender script
    log('\n========================================', colors.cyan);
    log('STEP 3: Pre-rendering routes', colors.cyan);
    log('========================================', colors.cyan);

    await runCommand('node', ['scripts/prerender.js']);
    log('✓ Pre-rendering completed successfully!', colors.green);

    // Success!
    log('\n========================================', colors.green);
    log('✓ BUILD COMPLETED SUCCESSFULLY!', colors.green);
    log('========================================', colors.green);

  } catch (error) {
    log('\n========================================', colors.red);
    log('✗ BUILD FAILED', colors.red);
    log('========================================', colors.red);
    log(`Error: ${error.message}`, colors.red);
    process.exit(1);
  } finally {
    // Step 4: Cleanup - kill preview server
    if (previewServer) {
      log('\n→ Cleaning up preview server...', colors.yellow);
      previewServer.kill('SIGTERM');

      // Wait a bit for graceful shutdown
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Force kill if still running
      if (!previewServer.killed) {
        previewServer.kill('SIGKILL');
      }

      log('✓ Preview server terminated', colors.green);
    }
  }
}

// Run the build
build().catch((error) => {
  console.error(error);
  process.exit(1);
});
