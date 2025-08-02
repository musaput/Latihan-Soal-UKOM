// Asumsikan allQuestions sudah didefinisikan di questions.js
// const allQuestions = [...];

const questionsPerPage = 50;
let currentBatch = 0;
let userAnswers = {}; // Menyimpan jawaban pengguna untuk semua soal

const questionsContainer = document.getElementById('questionsContainer');
// const resultSection = document.getElementById('resultSection'); // Not used anymore for display
// const scoreDisplay = document.getElementById('scoreDisplay'); // Not used anymore for display
// const answerKeyDiv = document.getElementById('answerKey'); // Not used anymore for display

const prevBatchBtn = document.getElementById('prevBatchBtn');
const nextBatchBtn = document.getElementById('nextBatchBtn');
const batchInfoSpan = document.getElementById('batchInfo');
const submitScoreDisplay = document.getElementById('submitScoreDisplay'); // New element
const batchScoreDisplayNav = document.getElementById('batchScoreDisplayNav'); // New element

// Store scores for each batch
let batchScores = {}; // Format: { batchIndex: { correct: X, total: Y, percentage: Z } }

function loadBatchQuestions() {
    questionsContainer.innerHTML = ''; // Bersihkan soal sebelumnya
    // resultSection.style.display = 'none'; // No longer needed as feedback is inline

    const startIndex = currentBatch * questionsPerPage;
    const endIndex = Math.min(startIndex + questionsPerPage, allQuestions.length);
    const questionsInCurrentBatch = allQuestions.slice(startIndex, endIndex);

    questionsInCurrentBatch.forEach((q, indexInBatch) => {
        const globalQuestionNumber = startIndex + indexInBatch + 1; // Nomor soal global (1-180)

        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-item');
        questionDiv.setAttribute('data-global-index', globalQuestionNumber - 1); // Simpan index global

        questionDiv.innerHTML = `<p>${globalQuestionNumber}. ${q.question}</p>`;

        q.options.forEach((option, optionIndex) => {
            const radioId = `q${globalQuestionNumber}-${optionIndex}`;
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.id = radioId;
            input.name = `q${globalQuestionNumber}`; // Name unik per soal global
            input.value = option;

            // Muat jawaban pengguna jika sudah ada
            if (userAnswers[globalQuestionNumber] === option) {
                input.checked = true;
            }

            // Simpan jawaban saat dipilih
            input.addEventListener('change', (event) => {
                userAnswers[globalQuestionNumber] = event.target.value;
                // Clear previous feedback if user changes answer
                const existingFeedback = questionDiv.querySelector('.feedback');
                if (existingFeedback) {
                    existingFeedback.remove();
                }
                // Remove previous selected option styling
                const allLabelsInQuestion = questionDiv.querySelectorAll('label');
                allLabelsInQuestion.forEach(lbl => {
                    lbl.classList.remove('selected-option-correct', 'selected-option-wrong');
                });
            });

            label.appendChild(input);
            label.appendChild(document.createTextNode(` ${option}`));
            questionDiv.appendChild(label);
        });
        questionsContainer.appendChild(questionDiv);
    });

    updateNavigationButtons();
    updateBatchInfoDisplay();
    updateScoreDisplays(); // Update score displays when batch changes
}

function updateNavigationButtons() {
    prevBatchBtn.disabled = currentBatch === 0;
    nextBatchBtn.disabled = (currentBatch + 1) * questionsPerPage >= allQuestions.length;
}

function updateBatchInfoDisplay() {
    const totalBatches = Math.ceil(allQuestions.length / questionsPerPage);
    batchInfoSpan.textContent = `Batch ${currentBatch + 1} / ${totalBatches}`;
}

function updateScoreDisplays() {
    const currentBatchScore = batchScores[currentBatch];
    if (currentBatchScore) {
        const scoreText = `Skor: ${currentBatchScore.correct}/${currentBatchScore.total} (${currentBatchScore.percentage.toFixed(2)}%)`;
        submitScoreDisplay.textContent = scoreText;
        batchScoreDisplayNav.textContent = scoreText;
    } else {
        submitScoreDisplay.textContent = '';
        batchScoreDisplayNav.textContent = '';
    }
}

function changeBatch(direction) {
    currentBatch += direction;
    loadBatchQuestions();
}

function submitQuiz() {
    let correctAnswersCount = 0;
    const startIndex = currentBatch * questionsPerPage;
    const endIndex = Math.min(startIndex + questionsPerPage, allQuestions.length);
    const questionsInCurrentBatch = allQuestions.slice(startIndex, endIndex);

    questionsInCurrentBatch.forEach((q, indexInBatch) => {
        const globalQuestionNumber = startIndex + indexInBatch + 1;
        const userAnswer = userAnswers[globalQuestionNumber];
        const isCorrect = (userAnswer === q.answer);

        const questionDiv = questionsContainer.querySelector(`div[data-global-index="${globalQuestionNumber - 1}"]`);
        if (!questionDiv) return; // Should not happen, but for safety

        // Remove any existing feedback before adding new one
        const existingFeedback = questionDiv.querySelector('.feedback');
        if (existingFeedback) {
            existingFeedback.remove();
        }

        // Remove previous selected option styling
        const allLabelsInQuestion = questionDiv.querySelectorAll('label');
        allLabelsInQuestion.forEach(lbl => {
            lbl.classList.remove('selected-option-correct', 'selected-option-wrong');
        });

        // Add feedback directly under the question
        const feedbackDiv = document.createElement('div');
        feedbackDiv.classList.add('feedback');

        const selectedInput = questionDiv.querySelector(`input[name="q${globalQuestionNumber}"][value="${userAnswer}"]`);
        if (selectedInput) {
            const selectedLabel = selectedInput.parentElement;
            if (isCorrect) {
                correctAnswersCount++;
                feedbackDiv.classList.add('correct');
                feedbackDiv.textContent = `Jawaban Anda Benar!`;
                selectedLabel.classList.add('selected-option-correct');
            } else {
                feedbackDiv.classList.add('wrong');
                feedbackDiv.innerHTML = `Jawaban Anda Salah. Kunci Jawaban: <strong>${q.answer}</strong>`;
                selectedLabel.classList.add('selected-option-wrong');
            }
        } else {
            // User didn't answer
            feedbackDiv.classList.add('wrong');
            feedbackDiv.innerHTML = `Anda tidak menjawab. Kunci Jawaban: <strong>${q.answer}</strong>`;
        }
        questionDiv.appendChild(feedbackDiv);
    });

    // Calculate score for the current batch
    const totalQuestionsInBatch = questionsInCurrentBatch.length;
    const scorePercentage = (correctAnswersCount / totalQuestionsInBatch) * 100;

    // Store the score for this batch
    batchScores[currentBatch] = {
        correct: correctAnswersCount,
        total: totalQuestionsInBatch,
        percentage: scorePercentage
    };

    updateScoreDisplays(); // Update score displays after calculation
    window.scrollTo(0, 0); // Scroll to top to see score easily
}

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', loadBatchQuestions);
