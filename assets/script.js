// Initial game state
let gameState = {
  rounds: [
    {
      roundNumber: 1,
      questions: [
        {
          question: "Wiecej niz jedno zwierze?",
          answers: [
            { answer: "pies", points: 35 },
            { answer: "kot", points: 18 },
            { answer: "ryba", points: 15 },
            { answer: "ptak", points: 12 },
            { answer: "kon", points: 10 },
            { answer: "krowa", points: 5 }
          ]
        },
      ]
    },
    {
      roundNumber: 2,
      questions: [
        {
          'question': 'Coś co można zjeść na śniadanie?',
          answers: [
            { answer: "jajko", points: 35 },
            { answer: "chleb", points: 18 },
            { answer: "masło", points: 15 },
            { answer: "szynka", points: 12 },
            { answer: "ser", points: 10 },
          ]
        },
      ]
    },
  ],
  leftTeamPoints: 0,
  rightTeamPoints: 0
};




document.addEventListener("DOMContentLoaded", function() {
  const leftMistakeButton = document.getElementById("left-mistake-button");
  const rightMistakeButton = document.getElementById("right-mistake-button");
  const leftMistakesContainer = document.getElementById("left-team-mistakes");
  const rightMistakesContainer = document.getElementById("right-team-mistakes");
  
  const mistakeSound = new Audio("assets/bledna-familiada.mp3");

  // Function to add a mistake to the left team
  leftMistakeButton.addEventListener("click", function() {
    const mistakeElement = document.createElement("p");
    mistakeElement.textContent = "X";
    leftMistakesContainer.appendChild(mistakeElement);
    playMistakeSound();
  });

  // Function to add a mistake to the right team
  rightMistakeButton.addEventListener("click", function() {
    const mistakeElement = document.createElement("p");
    mistakeElement.textContent = "X";
    rightMistakesContainer.appendChild(mistakeElement);
    playMistakeSound();
  });

  // Function to play the mistake sound
  function playMistakeSound() {
    mistakeSound.currentTime = 0; // Reset audio to start
    mistakeSound.play();
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const answerButtons = document.querySelectorAll(".answer-button");
  const answersContainer = document.getElementById("answers");
  const pointsInRoundValue = document.getElementById("points-in-round-value");
  const correctAnswerSound = new Audio("assets/poprawna-odpowiedz-familiada.mp3");

  let totalPointsInRound = 0;

  // Add click event listener to each answer button
  answerButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      const answer = button.dataset.answer;
      const points = parseInt(button.dataset.points); // Get points from parent li element
      increasePointsInRound(points);
      revealCorrectAnswer(answer);
      playCorrectAnswerSound();
    });
  });

  // Function to reveal the correct answer
  function revealCorrectAnswer(answer) {
    const answerElements = answersContainer.querySelectorAll(".single-answer");
    answerElements.forEach(function(element) {
      if (element.dataset.answer === answer) {
        // Replace dots with the actual answer text
        const dots = element.querySelector("span").nextSibling;
        dots.textContent = answer;
      }
    });
  }

  // Function to play the correct answer sound
  function playCorrectAnswerSound() {
    correctAnswerSound.currentTime = 0; // Reset audio to start
    correctAnswerSound.play();
  }

  // Function to increase points in round
  function increasePointsInRound(points) {
    totalPointsInRound += points;
    pointsInRoundValue.textContent = totalPointsInRound;
  }
});


document.addEventListener("DOMContentLoaded", function() {
  const przerywnikButton = document.getElementById("przerywnik-button");
  const przerywnikSound = new Audio("assets/przerywnik.mp3");

  // Add click event listener to przerywnik button
  przerywnikButton.addEventListener("click", function() {
    playPrzerywnikSound();
  });

  // Function to play the przerywnik sound
  function playPrzerywnikSound() {
    przerywnikSound.currentTime = 0; // Reset audio to start
    przerywnikSound.play();
  }
});


document.addEventListener("DOMContentLoaded", function() {
  const leftWinButton = document.getElementById("left-win-button");
  const rightWinButton = document.getElementById("right-win-button");
  const pointsInRoundValue = document.getElementById("points-in-round-value");
  const leftTeamPoints = document.getElementById("left-team-points");
  const rightTeamPoints = document.getElementById("right-team-points");
  const przerywnikSound = new Audio("assets/przerywnik.mp3");

  // Add click event listener to left win button
  leftWinButton.addEventListener("click", function() {
    addPointsToLeftTeam();
    playPrzerywnikSound();
  });

  // Add click event listener to right win button
  rightWinButton.addEventListener("click", function() {
    addPointsToRightTeam();
    playPrzerywnikSound();
  });

  // Function to add points to the left team
  function addPointsToLeftTeam() {
    const points = parseInt(pointsInRoundValue.textContent);
    const currentPoints = parseInt(leftTeamPoints.textContent);
    leftTeamPoints.textContent = currentPoints + points;
    pointsInRoundValue.textContent = "0"; // Reset points in round
  }

  // Function to add points to the right team
  function addPointsToRightTeam() {
    const points = parseInt(pointsInRoundValue.textContent);
    const currentPoints = parseInt(rightTeamPoints.textContent);
    rightTeamPoints.textContent = currentPoints + points;
    pointsInRoundValue.textContent = "0"; // Reset points in round
  }

  // Function to play the przerywnik sound
  function playPrzerywnikSound() {
    przerywnikSound.currentTime = 0; // Reset audio to start
    przerywnikSound.play();
  }
});
