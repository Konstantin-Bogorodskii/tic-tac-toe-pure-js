// Variables
const status = document.querySelector('.status-player');
const reset = document.querySelector('.reset');
const display = document.querySelector('.game-grid');
const cells = document.getElementsByClassName('grid-cell');

// Game Settings
let gameIsAlive = true;
let xIsNext = true;
const array = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

function checkResult() {}

display.addEventListener('click', e => {
  const target = e.target.classList;
  if (target.contains('grid-cell')) {
    if (target.contains('x') || target.contains('circle')) return;
    if (xIsNext) {
      target.add('x');
      xIsNext = !xIsNext;
      checkResult();
    } else {
      target.add('circle');
      xIsNext = !xIsNext;
      checkResult();
    }
  }
});
