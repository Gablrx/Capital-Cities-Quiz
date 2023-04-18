import React, { useState, useEffect } from "react";
import data from "./capital-cities";

import './App.css';


// Liste des capitale du monde pour chaque pays
const dataList = data.questions;
// Mélanger la liste pour un ordre aléatoire des question
const questions = [];
for (let i of dataList) {
  questions.sort(() => Math.random() - 0.5).push(i);
}

function App() {





  let [currentQuestion, setNextQuestion] = useState(0);
  let [isCorrect, checkIfCorrect] = useState(false);
  let [input, clearInput] = useState('');






  console.log(questions[currentQuestion].country + ' = ' + questions[currentQuestion].correctAnswer)




  const checkUserAnswer = (event) => {

    let userAnswer = event.target.value.toLowerCase();
    clearInput(userAnswer)

    if (userAnswer === (questions[currentQuestion].correctAnswer.toLowerCase())) {
      checkIfCorrect(isCorrect = true)
      console.log(isCorrect + 'Bravo')
    } else { console.log(isCorrect) }
  }
  const nextQuestion = () => {
    clearInput('');
    setNextQuestion(currentQuestion + 1);
    checkIfCorrect(isCorrect = false);
    console.log(currentQuestion);

  }


  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)
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
        <span className="swing">?</span>


        <div className="form">
          <div>
            <input type="text" value={input} onChange={(event) => { checkUserAnswer(event); }} />
            <button className={isCorrect ? "trueBtn" : "falseBtn"} onClick={() => nextQuestion()}>Next</button>
          </div>


        </div>
      </div>
    </div>
  );


}

export default App;
