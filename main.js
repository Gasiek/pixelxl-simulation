import { displayMat } from './mat.js';
import { startAnimation } from './animation.js';

const DISPLAY_REFRESH_RATE = 500;


startAnimation();
setInterval(displayMat, DISPLAY_REFRESH_RATE);
