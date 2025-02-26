import { ROWS, COLS } from './config.js';

const mat = Array.from({ length: ROWS }, () => Array.from({ length: COLS }, () => 0));

const turnOn = (x, y) => {
  if (isPointWithinMatrixBounds(x, y)) {
    mat[y][x] = 1;
  }
}

const turnOff = (x, y) => {
  if (isPointWithinMatrixBounds(x, y)) {
    mat[y][x] = 0;
  }
}

const isPointWithinMatrixBounds = (x, y) => {
  return x >= 0 && x < COLS && y >= 0 && y < ROWS;
};

const displayMat = () => {
  console.clear();
  mat.forEach(row => {
    console.log(row.join(''));
  });
}

export {
  mat,
  turnOn,
  turnOff,
  displayMat,
  isPointWithinMatrixBounds
};
