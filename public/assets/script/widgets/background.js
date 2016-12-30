class Background {
   constructor(elem) {
      this.element = elem;
      this.backgroundElem = document.querySelector('.home-quote');

      if (this.element) {
         const imgUrl = this.element.dataset.img;
         const img = this.splitUrl(imgUrl);
         this.setBackground(img);
      }
   }

   splitUrl(imgUrl) {
      let imgArr = imgUrl.split('/');
      const img = `${imgArr[imgArr.length - 1]}`;
      return img;
   }

   setBackground(imgUrl) {
      this.backgroundElem.style.background = `url(/assets/img/about/${imgUrl}) center center no-repeat fixed`;
      this.backgroundElem.style.backgroundSize = `cover`;
   }
}

export default Background;