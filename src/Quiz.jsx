import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Quiz() {
    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const questionURL = `https://opentdb.com/api.php?amount=10&category=14`
    // ${categoryID}
    useEffect(() => {
        axios.get(questionURL).then((response) => setQuestions(response.data.results))}, [])

    const handleNextQuestion = () => {
      setCurrentQuestion(currentQuestion + 1)
    }
    console.log(questions)
    return (
      <>
      <h1>Quiz</h1>
      {/* {questions.length > 0 ? ( */}
      <div className='slideContainer'>
        <div className='questionSlides'>
          <h2 className='title'>{questions[currentQuestion].question}</h2>
          <button>{questions[currentQuestion].correct_answer}</button>
          {/* <button>{questions[currentQuestion].incorrect_answer[0]}</button> */}
        </div>
        {/* ) : (<p>sorry no questions</p>)
      } */}
        <div>
          <button className="nextQuestion" onClick={handleNextQuestion}>Next Question</button>
        </div>
      </div>

      </>
    )
  }

  export default Quiz