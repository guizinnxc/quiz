const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
        answer: 1
    },
    {
        question: "Quanto é 7 x 8?",
        options: ["54", "56", "64", "58"],
        answer: 1
    },
    {
        question: "Quem escreveu 'Dom Casmurro'?",
        options: ["Machado de Assis", "José de Alencar", "Carlos Drummond", "Clarice Lispector"],
        answer: 0
    }
];

let current = 0;
let score = 0;

function showQuestion() {
    const q = questions[current];
    let html = `<div class='question'>${q.question}</div><ul class='options'>`;
    q.options.forEach((opt, idx) => {
        html += `<li><button onclick='selectOption(${idx})'>${opt}</button></li>`;
    });
    html += `</ul><div class='feedback' id='feedback'></div>`;
    document.getElementById('quiz').innerHTML = html;
}

window.selectOption = function(idx) {
    const q = questions[current];
    const feedback = document.getElementById('feedback');
    const buttons = document.querySelectorAll('.options button');
    buttons.forEach(btn => btn.disabled = true);
    if (idx === q.answer) {
        feedback.textContent = 'Correto!';
        feedback.style.color = 'green';
        score++;
    } else {
        feedback.textContent = `Errado! A resposta certa é: ${q.options[q.answer]}`;
        feedback.style.color = 'red';
    }
    setTimeout(() => {
        current++;
        if (current < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }, 1500);
}

function showScore() {
    document.getElementById('quiz').style.display = 'none';
    const scoreDiv = document.getElementById('score');
    scoreDiv.style.display = 'block';
    scoreDiv.innerHTML = `Você acertou <strong>${score}</strong> de <strong>${questions.length}</strong> perguntas!`;
}

document.addEventListener('DOMContentLoaded', showQuestion); 