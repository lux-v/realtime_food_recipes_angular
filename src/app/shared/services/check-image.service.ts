
import { Injectable } from '@angular/core';

@Injectable()
export class CheckImageService {
  private imageCache: { [url: string]: string } = {};

  constructor() {}

  async checkImage(url: string, placeholderUrl: string): Promise<string> {
    return await new Promise((resolve) => {
      const cachedImage = this.imageCache[url];
      if (cachedImage) {
        resolve(cachedImage);
      } else {
        const image = new Image();
        image.onload = () => {
          this.imageCache[url] = url;
          resolve(url);
        };
        image.onerror = () => {
          this.imageCache[url] = placeholderUrl;
          resolve(placeholderUrl);
        };
        image.src = url;
      }
    });
  }
}
