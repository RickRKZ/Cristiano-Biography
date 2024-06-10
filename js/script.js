function checkAnswers() {
    const correctAnswers = {
        question1: "Madeira",
        question2: "Cinco",
        question3: "Trintaeum",
        question4: "Centoequarentaeum",
        question5: "Sporting"
    };

    const form = document.getElementById("quiz-form");
    const resultDiv = document.getElementById("result");
    const formData = new FormData(form);
    let correctCount = 0;
    let totalQuestions = 5;

    for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
        const userAnswer = formData.get(question);
        if (userAnswer === correctAnswer) {
            correctCount++;
        }
    }

    if (correctCount === totalQuestions) {
        resultDiv.textContent = "Você acertou todas as perguntas!";
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = `Você acertou ${correctCount} de ${totalQuestions} perguntas.`;
        resultDiv.style.color = "red";
    }
}