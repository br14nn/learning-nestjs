import { ForbiddenException, Injectable } from '@nestjs/common';
import * as cheerio from 'cheerio';
import axios from 'axios';

@Injectable()
export class CheerioService {
  async test() {
    const $ = cheerio.load(
      '<h2 class="title">Hello world<p class="subtitle">Its Cheerio time!</p></h2>',
    );

    $('h2.title').after('<h3>You are the world</h3>');

    return {
      message: [$('h2.title').find('p.subtitle').text(), $('h3').text()],
    };
  }

  async anime() {
    try {
      const res = await axios.get(
        'https://gogoanime3.co/category/tsuki-ga-michibiku-isekai-douchuu-2nd-season',
      );

      const $ = cheerio.load(res.data);

      const episodeHref = $(
        '#episode_related > li:nth-child(1) > a > div.cate',
      ).text();
      return { message: episodeHref };

      // const coverURL = $(
      //   '#wrapper_bg > section > section.content_left > div.main_body > div:nth-child(2) > div.anime_info_body_bg > img',
      // ).attr('src');
      // return { message: `Cover Image Src: ${coverURL}` };

      // const title = $('div.anime_info_body>div.anime_info_body_bg>h1').text();
      // return { message: `Anime Title: ${title}` };
    } catch (error) {
      throw new ForbiddenException();
    }
  }
}
