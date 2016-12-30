import 'babel-polyfill';
// Parent constructors are not called in IE. ima.js polyfill with fix this issue.
import 'ima.js-babel6-polyfill';
import 'whatwg-fetch';
import WidgetFactory from './helpers/factory';
import dropdown from './helpers/dropdown';
import Background from './widgets/background';
import hamburger from './helpers/hamburger';
import smoothScroll from './helpers/smooth-scroll';
import Carousel from './widgets/carousel';
import Game from './widgets/game';

document.addEventListener('DOMContentLoaded', () => {
   dropdown();
   hamburger();
   smoothScroll();
   WidgetFactory.attach('.js-background-img', Background);
   WidgetFactory.attach('body', Game);
   WidgetFactory.attach('#carousel', Carousel, {
      el: 'carousel',
      autoplay: false,
      interval: 1500,
      initial: 0,
      dots: true,
      arrows: true,
      buttons: false
   });
});
