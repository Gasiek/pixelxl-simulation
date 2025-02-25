import { DISPLAY_REFRESH_RATE } from './main.js';
import { ROWS, COLS, turnOn, turnOff, isPointWithinMatrixBounds } from './mat.js';

const CENTER_X = 14;
const CENTER_Y = 7;
const RADIUS = 5;
const SHOULD_STAY_IN_BOUNDS = true;


const plotCircle = (cx, cy, r) => {
  let x = r;
  let y = 0;
  let decision = 1 - r;
  const points = [];

  const addPoint = (px, py) => {
    if (!points.some(([existingX, existingY]) => existingX === px && existingY === py)) {
      points.push([px, py]);
    }
  };

  while (x >= y) {
    addPoint(cx + x, cy + y);
    addPoint(cx - x, cy + y);
    addPoint(cx + x, cy - y);
    addPoint(cx - x, cy - y);
    addPoint(cx + y, cy + x);
    addPoint(cx - y, cy + x);
    addPoint(cx + y, cy - x);
    addPoint(cx - y, cy - x);

    y++;
    if (decision <= 0) {
      decision += 2 * y + 1;
    } else {
      x--;
      decision += 2 * (y - x) + 1;
    }
  }

  return points.sort((a, b) => {
    const angleA = Math.atan2(a[1] - cy, a[0] - cx);
    const angleB = Math.atan2(b[1] - cy, b[0] - cx);
    return angleA - angleB;
  });
};

const startAnimation = (centerX = CENTER_X, centerY = CENTER_Y, newRadius = RADIUS, interval = DISPLAY_REFRESH_RATE) => {
  if (!isPointWithinMatrixBounds(centerX, centerY)) {
    console.error("Error: centerX and centerY must be within the matrix bounds.");
    return;
  }
  if (interval <= 0) {
    console.error("Error: interval must be a positive number.");
    return;
  }
  if (newRadius <= 0) {
    console.error("Error: radius must be a positive number.");
    return;
  }
  const maxRadius = Math.min(centerX, centerY, COLS - centerX - 1, ROWS - centerY - 1);
  const radius = SHOULD_STAY_IN_BOUNDS ? Math.min(newRadius, maxRadius) : newRadius;

  if (radius <= 0) {
    console.warn("Radius is too small, no animation will be shown.");
    return;
  }

  const points = plotCircle(centerX, centerY, radius);

  let currentIndex = 0;

  const updatePixel = () => {
    if (currentIndex > 0) {
      const [prevX, prevY] = points[currentIndex - 1];
      turnOff(prevX, prevY);
    } else {
      const [lastX, lastY] = points[points.length - 1];
      turnOff(lastX, lastY);
    }

    const [newX, newY] = points[currentIndex];
    turnOn(newX, newY);

    currentIndex = (currentIndex + 1) % points.length;
  };

  setInterval(updatePixel, interval);
};


export {
  startAnimation
};
