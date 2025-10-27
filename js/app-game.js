document.addEventListener('DOMContentLoaded', () => {
    // 1. Definição das Perguntas
    // Um array de objetos. Cada objeto é uma pergunta.
    const questions = [
        {
            question: "O que significa 'CSS'?",
            answers: [
                { text: "Creative Style Sheets", correct: false },
                { text: "Cascading Style Sheets", correct: true },
                { text: "Computer Style Sheets", correct: false },
                { text: "Colorful Style Sheets", correct: false }
            ]
        },
        {
            question: "Qual tag HTML é usada para linkar um arquivo JavaScript externo?",
            answers: [
                { text: "< script >", correct: true },
                { text: "< javascript >", correct: false },
                { text: "< js >", correct: false },
                { text: "< link >", correct: false }
            ]
        },
        {
            question: "Qual símbolo é usado para selecionar um elemento por 'id' no CSS?",
            answers: [
                { text: " .", correct: false },
                { text: " *", correct: false },
                { text: " #", correct: true },
                { text: " $", correct: false }
            ]
        },
        {
            question: "O que o operador '===' verifica em JavaScript?",
            answers: [
                { text: "Apenas o valor", correct: false },
                { text: "Apenas o tipo", correct: false },
                { text: "Valor E Tipo", correct: true },
                { text: "Nenhuma das anteriores", correct: false }
            ]
        },
        {
            question: "¿Qué significa 'HTML'?",
            answers: [
                { text: "HyperText Markup Language", correct: true },
                { text: "HighText Machine Language", correct: false },
                { text: "Hyperlinks and Text Markup Language", correct: false },
                { text: "Home Tool Markup Language", correct: false }
            ]
        },
        {
            question: "¿Qué etiqueta HTML se usa para definir el contenido principal de la página?",
            answers: [
                { text: "< main >", correct: true },
                { text: "< body >", correct: false },
                { text: "< section >", correct: false },
                { text: "< article >", correct: false }
            ]
        },
        {
            question: "¿Cuál es la forma correcta de aplicar un archivo CSS externo en HTML?",
            answers: [
                { text: "< style src='styles.css' >", correct: false },
                { text: "< link rel='stylesheet' href='styles.css' >", correct: true },
                { text: "< css link='styles.css' >", correct: false },
                { text: "< stylesheet>styles.css</stylesheet >", correct: false }
            ]
        },
        {
            question: "¿Qué propiedad CSS se usa para cambiar el color del texto?",
            answers: [
                { text: "font-color", correct: false },
                { text: "color", correct: true },
                { text: "text-color", correct: false },
                { text: "foreground", correct: false }
            ]
        },
        {
            question: "¿Cuál de las siguientes NO es una forma válida de declarar una variable en JavaScript moderno?",
            answers: [
                { text: "var", correct: false },
                { text: "let", correct: false },
                { text: "const", correct: false },
                { text: "set", correct: true }
            ]
        },
        {
            question: "¿Qué método se usa para seleccionar un elemento por su id en JavaScript?",
            answers: [
                { text: "document.querySelector('#id')", correct: true },
                { text: "document.getElementsByClassName('id')", correct: false },
                { text: "document.getElement('id')", correct: false },
                { text: "document.findElementById('id')", correct: false }
            ]
        },
        {
            question: "¿Qué unidad CSS se ajusta según el tamaño de la pantalla o el viewport?",
            answers: [
                { text: "px", correct: false },
                { text: "em", correct: false },
                { text: "vw", correct: true },
                { text: "pt", correct: false }
            ]
        },
        {
            question: "¿Qué evento JavaScript se dispara cuando el usuario hace clic en un elemento?",
            answers: [
                { text: "onmouseover", correct: false },
                { text: "onload", correct: false },
                { text: "onclick", correct: true },
                { text: "onchange", correct: false }
            ]
        },
        {
            question: "¿Qué método convierte un objeto JavaScript en una cadena JSON?",
            answers: [
                { text: "JSON.toString()", correct: false },
                { text: "JSON.parse()", correct: false },
                { text: "JSON.stringify()", correct: true },
                { text: "object.toJSON()", correct: false }
            ]
        }
    ];

    // 2. Referências aos elementos HTML
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const nextButton = document.getElementById('next-btn');

    // 3. Variáveis de Estado
    let currentQuestionIndex = 0;
    let score = 0;

    // 4. Função para iniciar ou reiniciar o quiz
    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Próximo";
        nextButton.style.display = 'none'; // Esconde o botão "Próximo"
        showQuestion();
    }

    // 5. Função para mostrar uma pergunta
    function showQuestion() {
        resetState(); // Limpa o estado anterior (botões, etc.)

        let currentQuestion = questions[currentQuestionIndex];
        questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

        // Cria os botões de resposta
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerHTML = answer.text;
            button.classList.add('btn');

            // Armazena a informação se a resposta é correta dentro do botão
            if (answer.correct) {
                button.dataset.correct = "true";
            }

            button.addEventListener('click', selectAnswer);
            answerButtonsElement.appendChild(button);
        });
    }

    // 6. Função para limpar o estado (remover botões antigos)
    function resetState() {
        nextButton.style.display = 'none'; // Esconde o botão "Próximo"
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }
    }

    // 7. Função chamada ao clicar numa resposta
    function selectAnswer(e) {
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";

        if (isCorrect) {
            selectedBtn.classList.add('correct'); // Adiciona classe CSS verde
            score++; // Aumenta a pontuação
        } else {
            selectedBtn.classList.add('incorrect'); // Adiciona classe CSS vermelha
        }

        // Mostra qual era a resposta correta (caso o usuário erre)
        Array.from(answerButtonsElement.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add('correct');
            }
            button.disabled = true; // Desabilita todos os botões
        });

        nextButton.style.display = 'block'; // Mostra o botão "Próximo"
    }

    // 8. Função para mostrar a pontuação final
    function showScore() {
        resetState();
        questionElement.innerHTML = `Quiz terminado! 🚀<br>O seu score foi ${score} de ${questions.length}.`;
        nextButton.innerHTML = "Recomeçar";
        nextButton.style.display = 'block';
    }

    // 9. Lógica do botão "Próximo"
    function handleNextButton() {
        currentQuestionIndex++; // Vai para a próxima pergunta
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            // Se as perguntas acabaram, mostra a pontuação
            showScore();
        }
    }

    // 10. Event Listeners
    nextButton.addEventListener('click', () => {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
        } else {
            // Se o quiz acabou, o botão vira "Recomeçar"
            startQuiz();
        }
    });

    // Inicia o Quiz quando a página carrega!
    startQuiz();
});