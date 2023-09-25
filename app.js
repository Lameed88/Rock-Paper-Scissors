// const choice = document.querySelectorAll('.choices');
// const score = document.getElementById('score');
// const result = document.getElementById('result');
// const restart = document.getElementById('restart');
// const modal = document.querySelector('.modal');
// const scoreboard = {
//   Supreme: 0,
//   Computer: 0
// }

// const play = (e) => {
//     console.log(e.target.id)
// }

// // Event listeners
// choice.forEach(choice => choice.addEventListner("click",play));
const choice = document.querySelectorAll(".choices")
const score = document.getElementById("score")
const result = document.getElementById("result")
const restart = document.getElementById("restart")
const modal = document.querySelector(".modal")

const scoreBoard = {Supreme:0, computer:0}

const play = (e) =>{
    
    restart.style.display = 'inLine-block'
    const playChoice = e.target.id
    const computerChoice = getComputerChoice()
    const winner = getWinner(playChoice, computerChoice)
    showWinner(winner, computerChoice)
    console.log(playChoice, computerChoice);
   
}

const getComputerChoice = () => {
    const rand = Math.random();
    if (rand < 0.34) {
      return 'rock';
    } else if (rand <= 0.67) {
      return 'paper';
    } else {
      return 'scissors';
    }
  }

// console.log(Math.random());

const getWinner = (p, c) => {
    if (p === c) {
      return 'draw';
    } else if (p === 'rock') {
      if (c === 'paper') {
        return 'computer';
      } else {
        return 'Supreme';
      }
    } else if (p === 'paper') {
      if (c === 'scissors') {
        return 'computer';
      } else {
        return 'Supreme';
      }
    } else if (p === 'scissors') {
      if (c === 'rock') {
        return 'computer';
      } else {
        return 'Supreme';
      }
    }
  }


  const showWinner = (winner, computerChoice) => {
    if (winner === "Supreme") {
      // increase by score
      scoreBoard.Supreme++;
  
      //show modal result
      result.innerHTML = ` 
      <h1 class="text-win">You Win</h1>
      <i id="${computerChoice}" class="choice fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer choose <strong>${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}</strong></p>
      `;
    } else if (winner === "computer") {
      //increase by score
      scoreBoard.computer++;
      //show modal result
      result.innerHTML = ` 
      <h1 class="text-win">You Lose</h1>
      <i id="${computerChoice}" class="choice fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer choose <strong>${computer.ChoicecharAt(0).toUpperCase()+computerChoice.slice(1)}</strong></p>
      `;
    } else {
      result.innerHTML = `
          <h1>It is a draw</h1>
          <i id="${computerChoice}" class="choice fas fa-hand-${computerChoice} fa-10x"></i>
          <p>Computer choose <strong>${computer.ChoicecharAt(0).toUpperCase()+computerChoice.slice(1)}</strong></p>
          `;
    }
  
    score.innerHTML = `
    <p>Supreme: ${scoreBoard.Supreme}</p>
    <p>computer: ${scoreBoard.computer}</p>
    `
    
    modal.style.display = 'block'
    
  };

  const restartGame = () => {
    scoreBoard.Supreme = 0
    scoreBoard.computer = 0
    score.innerHTML = `
    <p>Supreme: 0</p>
    <p>Computer: 0</p> `

  }

  const clearModal = (e) => {
    if (e.target ==modal) {
        modal.style.display = 'none'
    }
  }
   

choice.forEach(choice => choice.addEventListener("click", play))
window.addEventListener('click', clearModal)
restart.addEventListener('click', restartGame)