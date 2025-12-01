import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes to pre-render (marketing pages only)
const routes = [
  '/',
  '/about',
  '/geo',
  '/seo',
  // '/ppc', // Temporarily hidden for launch - may re-add later
  '/ai-agents',
  '/tool',
  '/insights',
  '/insights/chatgpt-brand-discovery',
  '/how-we-work',
  '/contact',
  '/privacy-policy',
  '/terms-of-use'
];

const distPath = path.join(__dirname, '..', 'dist');
const port = process.env.PORT || 5174;

async function prerender() {
  console.log('🎨 Starting pre-render process...');
  console.log(`📄 Pre-rendering ${routes.length} marketing pages for SEO\n`);

  // Detect environment - use serverless Chromium on cloud platforms
  const isCloudPlatform = process.env.NODE_ENV === 'production' || process.env.RAILWAY_ENVIRONMENT || process.env.VERCEL;

  // Launch browser with optimized settings
  let browser;
  try {
    if (isCloudPlatform) {
      const platform = process.env.VERCEL ? 'Vercel' : process.env.RAILWAY_ENVIRONMENT ? 'Railway' : 'Production';
      console.log(`🚀 ${platform} mode: Using @sparticuz/chromium (serverless-optimized)`);

      // Disable graphics mode for Vercel (fixes libnss3.so error)
      if (process.env.VERCEL) {
        chromium.setGraphicsMode = false;
      }

      // Additional args for Vercel compatibility
      const extraArgs = [
        '--single-process',
        '--no-zygote',
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--disable-software-rasterizer',
      ];

      browser = await puppeteer.launch({
        args: [...chromium.args, ...extraArgs],
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
        ignoreHTTPSErrors: true,
      });
    } else {
      console.log('💻 Development mode: Using local Chrome');
      // Try to find local Chrome installation
      const executablePath =
        process.platform === 'darwin'
          ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
          : process.platform === 'linux'
          ? '/usr/bin/google-chrome'
          : 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

      browser = await puppeteer.launch({
        headless: true,
        executablePath,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
    }
  } catch (error) {
    console.error('❌ Failed to launch browser:', error.message);
    console.log('💡 Tip: Make sure Chrome is installed on your system');
    process.exit(1);
  }

  try {
    const startTime = Date.now();
    let successCount = 0;
    
    for (const route of routes) {
      console.log(`\n📄 Pre-rendering: ${route}`);

      const page = await browser.newPage();

      // Set aggressive timeout for CI/CD (reduce to 10s)
      page.setDefaultTimeout(10000);

      // Navigate to the route
      const url = `http://localhost:${port}${route}`;
      
      try {
        // Use 'load' instead of 'networkidle0' for faster rendering
        await page.goto(url, {
          waitUntil: 'load',
          timeout: 10000
        });

        // Minimal wait for hydration (reduce from 500ms to 200ms)
        await new Promise(resolve => setTimeout(resolve, 200));

        // Get the rendered HTML
        const html = await page.content();

        // Determine output path
        let outputPath;
        if (route === '/') {
          outputPath = path.join(distPath, 'index.html');
        } else {
          const routePath = path.join(distPath, route);
          if (!fs.existsSync(routePath)) {
            fs.mkdirSync(routePath, { recursive: true });
          }
          outputPath = path.join(routePath, 'index.html');
        }

        // Write the pre-rendered HTML
        fs.writeFileSync(outputPath, html);
        console.log(`   ✅ Saved to: ${path.relative(process.cwd(), outputPath)}`);
        successCount++;
      } catch (error) {
        console.error(`   ❌ Failed: ${error.message}`);
        // Continue with other routes even if one fails
      }

      await page.close();
    }

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`\n${'='.repeat(60)}`);
    console.log(`✅ Pre-rendering complete!`);
    console.log(`   📊 Success: ${successCount}/${routes.length} pages`);
    console.log(`   ⏱️  Duration: ${duration}s`);
    console.log(`${'='.repeat(60)}\n`);
    
    if (successCount < routes.length) {
      console.warn(`⚠️  Warning: ${routes.length - successCount} page(s) failed to pre-render`);
    }
  } catch (error) {
    console.error('\n❌ Error during pre-rendering:', error);
    process.exit(1);
  } finally {
    await browser.close();
    console.log('🔒 Browser closed\n');
  }
}

// Run the pre-render function
prerender();
