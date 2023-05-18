class Game {
  constructor() {
    this.container = document.querySelector('.scores');
    this.load = window.addEventListener('DOMContentLoaded', this.fetchScores.bind(this));
  }

  URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ma38sgK823XhOf3IWfPv/scores/';

  addScore = async (user, score) => {
    const data = {
      user,
      score,
    };
    try {
      const configuration = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(this.URL, configuration);
      const result = await response.json();
      return result;
    } catch (error) { return error; }
  }

  fetchScores = async () => {
    try {
      const data = await fetch(this.URL);
      const result = await data.json();

      this.showScores(result);
      return result;
    } catch (error) { return error; }
  }

  showScores = async (data) => {
    this.container.innerHTML = '';

    await data.result.forEach((element) => {
      this.container.innerHTML += `
      <div class="score" >
        <h4> ${element.user} : ${element.score} </h4>
      </div >
      `;
    });
  }
}

export default Game;
