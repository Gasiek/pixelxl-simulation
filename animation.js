import { DISPLAY_REFRESH_RATE } from './main.js';
import { ROWS, COLS, turnOn, turnOff, isPointWithinMatrixBounds } from './mat.js';

const CENTER_X = 14;
const CENTER_Y = 7;
const RADIUS = 5;
const SHOULD_STAY_IN_BOUNDS = true;

const MIN_STEP_COUNT = 8;

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

  const stepCount = Math.max(MIN_STEP_COUNT, Math.round(2 * Math.PI * radius));
  const angleStep = (2 * Math.PI) / stepCount;
  let angle = Math.random() * 2 * Math.PI;

  let prevX = null;
  let prevY = null;

  const updatePixel = () => {
    if (prevX !== null && prevY !== null) {
      turnOff(prevX, prevY);
    }

    const newX = Math.round(centerX + radius * Math.cos(angle));
    const newY = Math.round(centerY + radius * Math.sin(angle));

    turnOn(newX, newY);

    prevY = newY;
    prevX = newX;
    angle = (angle + angleStep) % (2 * Math.PI);
  };

  setInterval(updatePixel, interval);
};

export {
  startAnimation
};