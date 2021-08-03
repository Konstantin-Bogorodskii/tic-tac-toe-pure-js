// Variables
const status = document.querySelector('.status');
const reset = document.querySelector('.reset');
const display = document.querySelector('.game-grid');
const cells = document.querySelectorAll('.grid-cell');

// Game Settings
let gameIsAlive = true;
let isNextX = true;

// Functions

const resetGame = e => {
  console.log(e);
};

const cellClick = e => {
  const target = e.target;
  const position = target.getAttribute('data-position');
};

// Add Event Listeners
reset.addEventListener('click', resetGame);
cells.forEach(element => {
  element.addEventListener('click', cellClick);
});
