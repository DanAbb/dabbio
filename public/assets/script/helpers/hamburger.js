export default hamburger => {
   const ham = document.querySelector('#nav-icon3');
   const menu = document.querySelector('.menu');

   ham.addEventListener('click', () => {
      ham.classList.toggle('open');

      if (ham.classList.contains('open')) {
         ham.parentElement.style.position = 'fixed';
      } else {
         ham.parentElement.style.position = 'absolute';
      }

      menu.classList.toggle('slideIn');
   });
}