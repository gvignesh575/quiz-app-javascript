const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Hyper Transfer Markup Language", correct: false },
      { text: "High Tech Markup Language", correct: false },
      { text: "Hyperlink and Text Markup Language", correct: false },
    ],
  },
  {
    question:
      "Which programming language is commonly used for web development?",
    answers: [
      { text: "Python", correct: false },
      { text: "Java", correct: false },
      { text: "JavaScript", correct: true },
      { text: "C++", correct: false },
    ],
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Computer Style Sheet", correct: false },
      { text: "Colorful Style Sheet", correct: false },
      { text: "Creative Style Sheet", correct: false },
      { text: "Cascading Style Sheet", correct: true },
    ],
  },
  {
    question: "Which company developed the Android operating system?",
    answers: [
      { text: "Microsoft", correct: false },
      { text: "Apple", correct: false },
      { text: "Google", correct: true },
      { text: "Samsung", correct: false },
    ],
  },
  {
    question: "What does API stand for?",
    answers: [
      { text: "Application Programming Interface", correct: true },
      { text: "Advanced Programming Interface", correct: false },
      { text: "Application Process Interface", correct: false },
      { text: "Automated Programming Interface", correct: false },
    ],
  },
  {
    question:
      "Which JavaScript framework is commonly used for building user interfaces?",
    answers: [
      { text: "Angular", correct: false },
      { text: "React", correct: true },
      { text: "Vue", correct: false },
      { text: "Ember", correct: false },
    ],
  },
  {
    question: "What does AI stand for?",
    answers: [
      { text: "Artificial Intelligence", correct: true },
      { text: "Automated Interaction", correct: false },
      { text: "Advanced Information", correct: false },
      { text: "Adaptive Interface", correct: false },
    ],
  },
  {
    question:
      "Which programming language is commonly used for machine learning?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: true },
      { text: "C#", correct: false },
      { text: "Ruby", correct: false },
    ],
  },
  {
    question: "What is the purpose of a version control system like Git?",
    answers: [
      {
        text: "To track changes in files and collaborate on projects",
        correct: true,
      },
      { text: "To create graphical user interfaces", correct: false },
      { text: "To optimize database queries", correct: false },
      { text: "To automate deployment processes", correct: false },
    ],
  },
  {
    question:
      "Which database management system is known for its scalability and flexibility?",
    answers: [
      { text: "MySQL", correct: false },
      { text: "SQLite", correct: false },
      { text: "MongoDB", correct: true },
      { text: "PostgreSQL", correct: false },
    ],
  },
  {
    question: "What is the purpose of the CSS framework Bootstrap?",
    answers: [
      {
        text: "To create responsive and visually appealing websites",
        correct: true,
      },
      {
        text: "To handle server-side logic in web applications",
        correct: false,
      },
      {
        text: "To perform asynchronous operations in JavaScript",
        correct: false,
      },
      { text: "To automate testing of web applications", correct: false },
    ],
  },
  {
    question:
      "Which programming language is commonly used for building mobile applications?",
    answers: [
      { text: "Swift", correct: false },
      { text: "Kotlin", correct: false },
      { text: "Java", correct: true },
      { text: "C#", correct: false },
    ],
  },
  {
    question:
      "What is the primary purpose of the HTTP protocol in web development?",
    answers: [
      { text: "To style web pages", correct: false },
      {
        text: "To transmit data between a web server and a web client",
        correct: true,
      },
      { text: "To store data on the client-side", correct: false },
      { text: "To define the structure of a web page", correct: false },
    ],
  },
  {
    question:
      "What is the role of a containerization platform like Docker in software development?",
    answers: [
      { text: "To manage databases", correct: false },
      { text: "To virtualize operating systems", correct: false },
      {
        text: "To package and deploy applications with their dependencies",
        correct: true,
      },
      { text: "To create graphical user interfaces", correct: false },
    ],
  },
  {
    question:
      "Which cloud computing service provides on-demand computing resources?",
    answers: [
      { text: "Azure", correct: false },
      { text: "Google Cloud Platform", correct: false },
      { text: "Amazon Web Services (AWS)", correct: true },
      { text: "IBM Cloud", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct == "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct == "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
