// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CheckImageService {
//    imageSrc=""

//   constructor() {}

//   async checkImage(url: string, placeholderUrl: string)  {
//     this.imageSrc = placeholderUrl;

//      const promise =new Promise((resolve) => {
//       const image = new Image();
//       image.onload = () => resolve(url);
//       image.onerror = () => resolve(placeholderUrl);
//       image.src = url;

//       this.imageSrc = image.src;
//     });

    
//      return this.imageSrc;
    
//   }
// }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckImageService {
  private imageCache: { [url: string]: string } = {};

  constructor() {}

  checkImage(url: string, placeholderUrl: string): Promise<string> {
    return new Promise((resolve) => {
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
