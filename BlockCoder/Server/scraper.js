const express = require('express');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');
const readline = require('readline');

const app = express();
app.use(bodyParser.json());

app.post('/search', async (req, res) => {
  const companyId = 'U72900KA2011PTC060958';

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const url = 'https://www.mca.gov.in/mcafoportal/viewCompanyMasterData.do'; // Replace with the actual URL of the search page.

  await page.goto(url);

  // Fill in the company ID input field.
  await page.type('#companyID', companyId);

  // Detect if CAPTCHA is present by checking for a specific element.
  const isCaptchaPresent = await page.evaluate(() => {
    return document.querySelector('#captcha') !== null;
  });

  if (isCaptchaPresent) {
    // If CAPTCHA is detected, provide a URL to the user for manual CAPTCHA entry.
    console.log('CAPTCHA detected. Please visit the following URL to view and solve the CAPTCHA:');
    console.log(page.url()); // Provide the URL of the current page.

    // Create a listener for user input (Enter key press) to continue automation.
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question('Press Enter after solving the CAPTCHA: ', async () => {
      rl.close();

      // Continue with automation after the user presses Enter.
      await page.click('#companyLLPMasterData_0');
      await page.waitForSelector('#companiesact1');
      console.log(page.url())
      // Extract and process the search results.
      const searchResults = await page.evaluate(() => {
        const element = document.getElementById('exportCompanyMasterData');
        console.log(element)
        return element !== null;
      });
      console.log(searchResults);

      // Close the Puppeteer browser.
      await browser.close();

      console.log('Search completed');
      res.json({ result: 'Search completed' });
    });
  } else {
    // CAPTCHA not detected, continue with the automation.
    // Submit the form, extract results, etc.
    await page.click('#companyLLPMasterData_0');
    await page.waitForSelector('.search-results');

    // Extract and process the search results.
    const searchResults = await page.evaluate(() => {
      // Extract data from the search results page using DOM manipulation.
      // Return the results as an array or object.
    });

    // Close the Puppeteer browser.
    await browser.close();

    console.log('Search completed');
    res.json({ result: 'Search completed' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
