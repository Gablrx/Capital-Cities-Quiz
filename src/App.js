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
  let [isCorrect, setUserAnswer] = React.useState(false)


  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })




  const nextQuestion = () => {

    setNextQuestion(currentQuestion + 1);
    setUserAnswer(isCorrect = false);
    console.log(currentQuestion)

  }

  console.log(questions[currentQuestion].country + ' = ' + questions[currentQuestion].correctAnswer)




  const checkUserAnswer = (event) => {

    let userAnswer = event.target.value.toLowerCase();

    if (userAnswer === (questions[currentQuestion].correctAnswer.toLowerCase())) {
      setUserAnswer(isCorrect = true)
      console.log(isCorrect + 'Bravo')
    } else { console.log(isCorrect) }
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
            <input type="text" onChange={(event) => { checkUserAnswer(event); }} />
          </div>

          <button onClick={() => nextQuestion()}>Next</button>
        </div>
      </div>
    </div>
  );


}

export default App;
