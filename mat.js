const ROWS = 14;
const COLS = 28;

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
  ROWS,
  COLS,
  mat,
  turnOn,
  turnOff,
  displayMat,
  isPointWithinMatrixBounds
};