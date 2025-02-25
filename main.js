import { displayMat } from './mat.js';
import { startAnimation } from './animation.js';

const DISPLAY_REFRESH_RATE = 500;


startAnimation();
// startAnimation(5, 5, 3, DISPLAY_REFRESH_RATE*2); // Uncomment this line to see an extra circle
setInterval(displayMat, DISPLAY_REFRESH_RATE);

export {
  DISPLAY_REFRESH_RATE
};