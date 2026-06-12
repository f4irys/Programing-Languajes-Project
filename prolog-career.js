// Free Program: Flashcard Generator in JavaScript
const flashcards = [];

function addFlashcard() {
  const question = document.getElementById('flashQuestion').value.trim();
  const answer = document.getElementById('flashAnswer').value.trim();

  if (!question || !answer) {
    alert('Please enter both a question and an answer.');
    return;
  }

  flashcards.push({ question, answer });
  renderFlashcards();
  document.getElementById('flashQuestion').value = '';
  document.getElementById('flashAnswer').value = '';
}

function renderFlashcards() {
  const output = document.getElementById('flashcardOutput');
  output.innerHTML = flashcards.map(card => `
    <div class="flashcard">
      <strong>Q: ${card.question}</strong>
      <span>A: ${card.answer}</span>
    </div>
  `).join('');
}
