import { displayMat } from './mat.js';
import { startAnimation } from './animation.js';
import { DISPLAY_REFRESH_RATE } from './config.js';


startAnimation();
// startAnimation(5, 5, 3, DISPLAY_REFRESH_RATE * 2); // Uncomment this line to see an extra circle
setInterval(displayMat, DISPLAY_REFRESH_RATE);
