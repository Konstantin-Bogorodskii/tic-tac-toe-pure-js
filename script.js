// Variables
const status = document.querySelector('.status');
const statusPlayer = document.querySelector('.status-player');
const reset = document.querySelector('.reset');
const display = document.querySelector('.game-grid');
const cells = document.querySelectorAll('.grid-cell');

// Game Settings
let gameCounter = 0;
let xIsNext = true;
let winner = null;

const WIN_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// console.log(cells[4]);

function checkResult() {
  for (let i = 0; i < WIN_COMBINATIONS.length; i++) {
    const element = WIN_COMBINATIONS[i];
    const p1 = element[0];
    const p2 = element[1];
    const p3 = element[2];
    if (
      cells[p1].classList.contains('x') &&
      cells[p2].classList.contains('x') &&
      cells[p3].classList.contains('x')
    ) {
      winner = 'X';
      showWinner(winner);
    } else if (
      cells[p1].classList.contains('circle') &&
      cells[p2].classList.contains('circle') &&
      cells[p3].classList.contains('circle')
    ) {
      winner = 'O';
      showWinner(winner);
    } else if (gameCounter === 9) {
      winner = 'It was a Draw';
      showWinner(winner);
    }
  }
}

const showWinner = winner => {
  if (winner === 'It was a Draw') {
    status.innerHTML = `<span class="fancy status-player">${winner}!</span>`;
  } else {
    status.innerHTML = `<span class="fancy status-player">${winner}</span>  has Won!`;
  }
};

display.addEventListener('click', e => {
  const target = e.target.classList;
  if (target.contains('grid-cell') && winner === null) {
    if (target.contains('x') || target.contains('circle')) return;
    if (xIsNext) {
      target.add('x');
      xIsNext = !xIsNext;
      gameCounter++;
      status.innerHTML = `<span class="fancy status-player">O</span> is Next`;
      checkResult();
    } else {
      target.add('circle');
      xIsNext = !xIsNext;
      gameCounter++;
      status.innerHTML = `<span class="fancy status-player">X</span> is Next`;
      checkResult();
    }
  }
});

function clearBoard() {
  cells.forEach(element => {
    element.classList.remove('x');
    element.classList.remove('circle');
  });
  xIsNext = true;
  winner = null;
  gameCounter = 0;
  status.innerHTML = `<span class="fancy status-player">X</span> is Next`;
}

reset.addEventListener('click', clearBoard);
