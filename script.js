const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const noCountEl = document.getElementById("noCount");
const resultEl = document.getElementById("result");

const STORAGE_KEY = "valentine_no_count";
let noCount = Number(localStorage.getItem(STORAGE_KEY)) || 0;

const updateNoCount = () => {
  noCountEl.textContent = String(noCount);
};

const shrinkNoButton = () => {
  const baseScale = 1;
  const shrinkPerClick = 0.08;
  const minScale = 0.2;
  const scale = Math.max(minScale, baseScale - noCount * shrinkPerClick);
  noBtn.style.transform = `scale(${scale})`;
};

const spawnConfetti = () => {
  const colors = ["#ff5fa2", "#ffd166", "#06d6a0", "#118ab2", "#ef476f"];
  for (let i = 0; i < 60; i += 1) {
    const piece = document.createElement("div");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * 0.4}s`;
    piece.style.transform = `translateY(0) rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 3200);
  }
};

const handleNoClick = () => {
  noCount += 1;
  localStorage.setItem(STORAGE_KEY, String(noCount));
  updateNoCount();
  shrinkNoButton();
  resultEl.textContent = "Aww, please reconsider 💘";
};

const handleYesClick = () => {
  resultEl.textContent = "Yay!! See you on Valentine’s Day 💖";
  spawnConfetti();
};

noBtn.addEventListener("click", handleNoClick);
yesBtn.addEventListener("click", handleYesClick);

updateNoCount();
shrinkNoButton();
