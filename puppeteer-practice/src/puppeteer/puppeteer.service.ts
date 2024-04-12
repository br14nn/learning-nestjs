import { ForbiddenException, Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';

@Injectable()
export class PuppeteerService {
  async test() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://developer.chrome.com/');

    await page.setViewport({ width: 1080, height: 1024 });

    await page.type('.devsite-search-field', 'automate beyond recorder');

    const searchResultSelector = '.devsite-result-item-link';
    await page.waitForSelector(searchResultSelector);
    await page.click(searchResultSelector);

    const textSelector = await page.waitForSelector(
      'text/Customize and automate',
    );
    const fullTitle = await textSelector?.evaluate((el) => el.textContent);

    console.log("The title of this blog post is '%s'.", fullTitle);

    await browser.close();
  }

  async buttonText() {
    let result: any;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://hianime.to/');

    await page.setViewport({ width: 1000, height: 1000 });

    const element = await page.waitForSelector('#action-button > a');

    const textContext = await element?.evaluate((el) => el.textContent);

    result = {
      message: textContext,
    };

    await browser.close();

    return result;
  }

  async spotlightAnimes() {
    let spotlightAnimeData: any[] = [];

    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto('https://hianime.to/home');
      await page.setViewport({ width: 1000, height: 1000 });

      for (let i = 2; i <= 11; i++) {
        const srcTitle = await page.waitForSelector(
          `xpath/html/body/div[3]/div[3]/div/div/div[1]/div[${i}]/div/div[2]/div[2]`,
        );
        const srcDescription = await page.waitForSelector(
          `xpath/html/body/div[3]/div[3]/div/div/div[1]/div[${i}]/div/div[2]/div[4]`,
        );

        const title = await srcTitle.evaluate((el) => el.textContent);
        const description = await srcDescription.evaluate(
          (el) => el.textContent,
        );

        spotlightAnimeData.push({
          rank: i - 1,
          title: title,
          description: description.replace(/\s+/g, ' ').trim(),
        });
      }

      await browser.close();

      return spotlightAnimeData;
    } catch (error) {
      throw new ForbiddenException('Something went wrong getting the data');
    }
  }
}
