const puppeteer = require("puppeteer-core");

async function main() {
  try {
    const browser = await puppeteer.launch({
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH, // Use the environment variable
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
      ],
    });

    const page = await browser.newPage();
    await page.goto("https://example.com");
    console.log(await page.title());

    await browser.close();
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
