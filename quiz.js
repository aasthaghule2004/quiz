const quiz = [
  { question: "What is the capital of India?", options: ["Mumbai", "Delhi", "Kolkata", "Chennai"], answer: "Delhi" },
  { question: "Which planet is known as the Red Planet?", options: ["Earth", "Venus", "Mars", "Jupiter"], answer: "Mars" },
  { question: "Which language is used for web pages?", options: ["Python", "HTML", "Java", "C++"], answer: "HTML" },
  { question: "Which is the largest ocean?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "Pacific" },
  { question: "Which animal is known as the King of the Jungle?", options: ["Elephant", "Tiger", "Lion", "Bear"], answer: "Lion" }
];

let current = 0;
let score = 0;

const questionText = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const scoreSpan = document.getElementById("score");
const resultDiv = document.getElementById("result");
const questionBox = document.getElementById("questionBox");
const restartBtn = document.getElementById("restartBtn");

function showQuestion() {
  const q = quiz[current];
  questionText.textContent = q.question;
  optionsDiv.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className = "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600";
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === quiz[current].answer) score++;
  current++;
  if (current < quiz.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionBox.classList.add("hidden");
  resultDiv.classList.remove("hidden");
  scoreSpan.textContent = score;
}

function restartQuiz() {
  current = 0;
  score = 0;
  resultDiv.classList.add("hidden");
  questionBox.classList.remove("hidden");
  showQuestion();
}

restartBtn.addEventListener("click", restartQuiz);

// Start the quiz
showQuestion();
