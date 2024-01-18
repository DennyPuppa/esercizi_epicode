let questionIndex = 0; // da 1 a 10
let clockSeconds = 6; // valore a caso, possiamo lasciare un minuto o decidere di cambiare a seconda della difficoltà
let score = 0;       //incrementa ad ogni risposta corretta

// populateQuestion()

nextQuestion()

function nextQuestion() {
    if (questionIndex < questions.length) {

        clock()
        populateQuestion()
        const buttons = document.querySelectorAll(".btn-answer");
        buttons.forEach((button)=>{
            button.addEventListener("click", ()=>{
                // console.log(e.target);
                console.log(button.textContent);
                controlAnswer(button.textContent);
                questionIndex++;
                console.log("questionIndex = " + questionIndex);
                // stopClock();
                // nextQuestion();
                clockSeconds = 0;
                
            })
        })
    }
    else{
        showResults()
    }

}

function populateQuestion() {
    cleanWindow()
    // clock()
    const questionContainer = document.querySelector("#question-container");
    const questionTitle = document.createElement("h1");
    questionTitle.textContent = questions[questionIndex].question;
    questionContainer.append(questionTitle);

    // const answerBtn = document.querySelectorAll(".btn-answer");

    // const arrayBtn = Array.from(answerBtn);
    // console.log(arrayBtn);
    populateBtns()
    // genere e popola 4 o 2 bottoni in base all'indice dell array questions
    // riavvia il clock
}

function populateBtns(){
    let answerData = questions[questionIndex].incorrect_answers;
    answerData.push(questions[questionIndex].correct_answer)
    console.log(answerData);
    const btnContainer = document.querySelector(".btn-container");

    const shuffledAnswer = shuffleAnswer(answerData);

    shuffledAnswer.forEach(answer => {
        const btn = document.createElement("button");
        btn.classList.add("btn-answer");
        btn.textContent = answer;
        btnContainer.append(btn);
    });
}

function shuffleAnswer(answerArray){
    return answerArray.sort(()=>Math.random()-0.5)
}

function controlAnswer(selectedAnswer){
    //controlla e aumenta score di uno in caso positivo
    if(selectedAnswer === questions[questionIndex].correct_answer){
        console.log("corretta");
        score ++;
        console.log("punteggio: " + score);
    } else{
        console.log("non corretta");
        console.log("punteggio: " + score);
    }
}

function cleanWindow() {
    //pulisce la pagina da elementi variabili
    const titleContainer = document.querySelector("#question-container");
    const answersContainer = document.querySelector("#answers-container");
    
    titleContainer.textContent = "";
    answersContainer.textContent = "";

}

function clock() {  // scandisce solo il tempo usando la variabile globale clockSeconds
    //setInterval( ,1000);
    clockSeconds = 6;
    const countdown = setInterval(() => {
        clockSeconds --
        console.log(clockSeconds);
        if (clockSeconds <= 0){
            if (questionIndex < questions.length) {
                clearInterval(countdown)
            }
            // clearInterval(countdown);
            questionIndex++;
            console.log("questionIndex = " + questionIndex);
            clockSeconds = 6;
            nextQuestion()
    }}, 1000);
    console.log("punteggio: " + score);
}

function showResults() {
    cleanWindow()
    // elimina gli elementi popolati da populateQuestion e genere un output html con score
    // const mainContainer = document.querySelector("#bigger-container");
    // const circle = document.createElement("div");
    // const resultsContainer = document.createElement("div");
    // const resultsText = document.createElement("p");
    // resultsContainer.classList.add("results-container");

    // resultsText.innerHTML = score + "/" + questions.length;

    // mainContainer.append(circle);
    // circle.append(resultsContainer);
    // resultsContainer.append(resultsText);


}


