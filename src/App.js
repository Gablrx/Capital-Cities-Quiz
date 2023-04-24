import React, { useState, } from "react";
import Map from "./Map";
import data from "./capitales-coordonnees";


// Liste des capitale du monde pour chaque pays
const dataList = data.questions;
// Mélanger la liste pour un ordre aléatoire des question
const questions = [];
for (let i of dataList) {
  questions.sort(() => Math.random() - 0.5).push(i);
}

const App = () => {

  let [currentQuestion, setNextQuestion] = useState(0);
  let [isCorrect, checkIfCorrect] = useState(false);
  let [input, setInput] = useState('');
  let [disabledBtn, setDisabledBtn] = useState(true)
  let [answer, showAnswer] = useState('?');

  let correctAnswer = questions[currentQuestion].correctAnswer.toLowerCase()
  let lat = questions[currentQuestion].lat;
  let lng = questions[currentQuestion].lng;

  let [coordinates, setCoordinates] = useState({ lat, lng });



  const checkUserAnswer = (event) => {

    let userAnswer = event.target.value.toLowerCase();

    setInput(userAnswer)// Récupère ce qui est tapé


    if (userAnswer === (correctAnswer)) {
      checkIfCorrect(isCorrect = true); // Bonne réponse
      showAnswer(questions[currentQuestion].correctAnswer + ' !'); // Affiche la réponse
      setDisabledBtn(false);// Active btn next
      setCoordinates({ lat, lng })
    } else {// Mauvaise réponse

      /* setDisabledBtn(isCorrect); */
    }
  }


  const nextQuestion = () => {

    setInput(''); // Vide l'input
    setDisabledBtn(true)
    setNextQuestion(currentQuestion + 1); // index+1 -> question suivante
    checkIfCorrect(isCorrect = false); // réinitialise isCorrect
    showAnswer('?')

  }

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

  console.log(questions[currentQuestion].country + ' = ' + questions[currentQuestion].correctAnswer)



  return (

    <div className="App">

      <div className="numQuestion">
        <span className="active-question-no">
          {addLeadingZero(currentQuestion + 1)}
        </span>
        <span className="total-question">
          /{addLeadingZero(questions.length)}
        </span>
      </div>


      <div className="questionBox">

        <div className="question">
          <h1>Quelle est la capitale<br />{questions[currentQuestion].article}</h1>
        </div>

        <div className="country">
          <h2>{questions[currentQuestion].country}</h2>
        </div>

        <div className="answerDisplay">
          <span className={isCorrect ? "answer" : "swing"}>{answer}</span>
        </div>

        <div className="form">
          <div>
            <input type="text" value={input} onChange={(event) => { checkUserAnswer(event); }} />
            <button disabled={disabledBtn} className={isCorrect ? "trueBtn" : "falseBtn"} onMouseDown={() => nextQuestion()}><span>Next </span></button>
          </div>
        </div>

      </div>

      <Map coordinates={coordinates} />

    </div>
  );


}

export default App;
