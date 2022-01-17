const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const messageDisplay = document.querySelector("#message");

const GAME_TIME = 5;

const API_URL = "https://random-word-api.herokuapp.com/word?number=100";
let words = ["banana", "key", "car", "javascript", "scalper"];
let score = 0; // 현재 점수
let time = 0; // 게임 시간
let timeInterval;
let isPlaying = false;
let isReady = false;

init();

// async await
// function init() {
//   const res = fetch(API_URL)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       words = data;
//     });
// }

async function init() {
  const res = await fetch(API_URL);
  const data = await res.json();
  words = data.filter((item) => {
    return item.length < 7;
  });
  isReady = true;
}

wordInput.addEventListener("input", (e) => {
  const typedText = e.target.value;
  const currentText = currentWord.innerText;

  if (typedText.toUpperCase() === currentText.toUpperCase() && isReady) {
    addScore();
    setNewWord();
  }
});

// 게임 종료
function gameover() {
  isPlaying = false;
  clearInterval(timeInterval);
  timeInterval = null;
  messageDisplay.innerText = "GAME OVER!";
  score = 0;
}

// 시간 카운트다운
function countDown() {
  time = time - 1;
  timeDisplay.innerText = time;
  if (time === 0) {
    gameover();
  }
}

function setNewWord() {
  time = GAME_TIME;
  wordInput.value = "";
  messageDisplay.innerText = "Now Playing!!!!";
  const randomIndex = Math.floor(Math.random() * words.length);
  currentWord.innerText = words[randomIndex];

  if (!isPlaying) {
    timeInterval = setInterval(countDown, 1000);
    isPlaying = true;
  }
}

function addScore() {
  score = score + 1;
  scoreDisplay.innerText = score;
}
