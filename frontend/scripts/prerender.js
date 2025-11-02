import puppeteer from 'puppeteer';
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
  '/ppc',
  '/tool',
  '/insights',
  '/how-we-work'
];

const distPath = path.join(__dirname, '..', 'dist');
const port = 5173;

async function prerender() {
  console.log('Starting pre-render process...');

  // Launch browser
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    for (const route of routes) {
      console.log(`Pre-rendering ${route}...`);

      const page = await browser.newPage();

      // Navigate to the route
      const url = `http://localhost:${port}${route}`;
      await page.goto(url, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });

      // Wait a bit more for any client-side rendering
      await new Promise(resolve => setTimeout(resolve, 500));

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
      console.log(`✓ Pre-rendered ${route} -> ${outputPath}`);

      await page.close();
    }

    console.log('✓ All routes pre-rendered successfully!');
  } catch (error) {
    console.error('Error during pre-rendering:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

// Run the pre-render function
prerender();
