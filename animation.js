import { DISPLAY_REFRESH_RATE } from './main.js';
import { ROWS, COLS, turnOn, turnOff } from './mat.js';

const CENTER_X = 14;
const CENTER_Y = 7;
const RADIUS = 5;
const SHOULD_STAY_IN_BOUNDS = true;

const MIN_STEP_COUNT = 8;

const startAnimation = (centerX = CENTER_X, centerY = CENTER_Y, newRadius = RADIUS, interval = DISPLAY_REFRESH_RATE) => {
  if (centerX < 0 || centerX >= COLS || centerY < 0 || centerY >= ROWS) {
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

  let prevRow = null;
  let prevCol = null;

  const updatePixel = () => {
    if (prevRow !== null && prevCol !== null) {
      turnOff(prevRow, prevCol);
    }

    const newCol = Math.round(centerX + radius * Math.cos(angle));
    const newRow = Math.round(centerY + radius * Math.sin(angle));

    if (newRow >= 0 && newRow < ROWS && newCol >= 0 && newCol < COLS) {
      turnOn(newRow, newCol);
    }

    prevRow = newRow;
    prevCol = newCol;
    angle = (angle + angleStep) % (2 * Math.PI);
  };

  setInterval(updatePixel, interval);
};

export {
  startAnimation
};