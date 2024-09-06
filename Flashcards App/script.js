const flashcards = [
    {
        question: "What is the capital of France?",
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        answer: "4"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answer: "Harper Lee"
    },
    {
        question: "What is the boiling point of water?",
        answer: "100°C"
    }
];

let currentCard = 0;

const questionElement = document.querySelector('.question');
const answerElement = document.querySelector('.answer');
const flipButton = document.getElementById('flip-btn');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

// Function to display the current flashcard
function displayFlashcard(index) {
    const card = flashcards[index];
    questionElement.textContent = card.question;
    answerElement.textContent = card.answer;
    answerElement.classList.add('hidden');
}

// Initial display
displayFlashcard(currentCard);

// Event listener for the flip button
flipButton.addEventListener('click', () => {
    answerElement.classList.toggle('hidden');
});

// Event listener for the next button
nextButton.addEventListener('click', () => {
    currentCard = (currentCard + 1) % flashcards.length;
    displayFlashcard(currentCard);
});

// Event listener for the previous button
prevButton.addEventListener('click', () => {
    currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;
    displayFlashcard(currentCard);
});
