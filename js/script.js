import { SlideNav } from './modules/slide.js';
import ScrollSuave from './modules/scroll-suave.js';

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');

const scrollSuave = new ScrollSuave('.js-menu a[href^="#"]');
scrollSuave.init();
