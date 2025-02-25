const ROWS = 14;
const COLS = 28;

const mat = Array.from({ length: ROWS }, () => Array.from({ length: COLS }, () => 0));

const turnOn = (row, col) => {
  if (row < 0 || row >= ROWS || col < 0 || col >= COLS) return;
  mat[row][col] = 1;
}

const turnOff = (row, col) => {
  if (row < 0 || row >= ROWS || col < 0 || col >= COLS) return;
  mat[row][col] = 0;
}

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
  displayMat
};