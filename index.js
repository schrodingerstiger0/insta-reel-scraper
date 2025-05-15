
const puppeteer = require('puppeteer-core');

async function main() {
  try {
    const browser = await puppeteer.launch({
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH, // Use the environment variable
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });

    const page = await browser.newPage();
    await page.goto('https://example.com');
    console.log(await page.title());

    await browser.close();
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
const puppeteer = require("puppeteer-core");

async function main() {
  try {
    // Launch Puppeteer using the system-installed Chromium
    const browser = await puppeteer.launch({
      executablePath:
        "/nix/store/khk7xpgsm5insk81azy9d560yq4npf77-chromium-131.0.6778.204/bin/chromium",
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
      ],
    });

    // Example: Navigate to a page and log its title
    const page = await browser.newPage();
    await page.goto("https://example.com");
    console.log(await page.title());

    // Close the browser
    await browser.close();
  } catch (error) {
    console.error("Error:", error);
  }
}

main();

