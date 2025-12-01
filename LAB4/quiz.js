
const quizQuestions = [
    {
        question: "What does CSS stand for?",
        answer: "cascading style sheets"
    },
    {
        question: "What does HTML stand for?",
        answer: "hypertext markup language"
    },
    {
        question: "2+2?",
        answer: "4"
    },
    {
        question: "Full form of AI&ML",
        answer: "artificial intelligence & machine learning"
    },
    {
        question: "What comes after 99?",
        answer: "100"
    }

];

// Function that runs the quiz
function runQuiz() {
    let score = 0; // Score counter

    // Loop through each question
    for (let i = 0; i < quizQuestions.length; i++) {
        let userInput = prompt(quizQuestions[i].question);

        // If user canceled prompt
        if (userInput === null) {
            alert("Quiz canceled.");
            return;
        }

        // Normalize user input
        userInput = userInput.toLowerCase().trim();

        // Check answer
        if (userInput === quizQuestions[i].answer) {
            alert("Correct!");
            score++;
        } else {
            alert(`Incorrect.The correct answer is: ${quizQuestions[i].answer}`);
        }
    }

    // Final score
    alert(`Quiz Complete!\nYour final score is: ${score} / ${quizQuestions.length}`);
}

// Run the quiz
runQuiz();

