import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';

@Injectable()
export class GogoanimeService {
  async test() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://gogoanime3.co/category/one-piece');

    await page.setViewport({ width: 1024, height: 1024 });

    const element = await page.waitForSelector(
      'xpath/html/body/div[3]/div/div/section/section[1]/div[1]/div[3]/ul',
    );
    const data = await element.evaluate((el) => el.children.length);
    return { message: data };

    // const element = await page.waitForSelector(
    //   'xpath/html/body/div[3]/div/div/section/section[1]/div[1]/div[2]/div[1]/img',
    // );
    // const coverURL = await element.evaluate((el: any) => el.src);
    // return { message: coverURL };
  }
}
