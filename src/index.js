import './index.css';
import Game from './modules/new_game.js';

const form = document.getElementById('form');
const game = new Game();
const refreshButton = document.getElementById('refresh');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = form.user.value;
  const score = form.score.value;
  game.addScore(user, score);
  game.fetchScores();
  form.reset()
});

refreshButton.addEventListener('click', () => {
  game.fetchScores();
});
