import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Category from './Category'

function Quiz({categoryID}) {
    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const questionURL = `https://opentdb.com/api.php?amount=10&category=${categoryID}`
    const [color, setColor] = useState('')

    useEffect(() => {
        axios.get(questionURL).then((response) => setQuestions(response.data.results))}, [categoryID])

    const handleNextQuestion = () => {
      setCurrentQuestion(currentQuestion + 1)
    }

    const handleGoBack = () => {
      setCurrentQuestion(Cateogry)
    }

    console.log(questions)
    return (
      <>
      <h1>Quiz</h1>
      <div className='slideContainer'>
      {questions.length > 0 ? (  
        <div className='questionSlides'>
          <h2 className='title'>{questions[currentQuestion].question}</h2>
          <div className='answerButtons'>
            <button onClick={handleNextQuestion}>{questions[currentQuestion].correct_answer}</button>
            <div className={color}>
              <button onClick={() => setColor('red')}>{questions[currentQuestion].incorrect_answers[0]}</button>
              <button onClick={() => setColor('yellow')}>{questions[currentQuestion].incorrect_answers[1]}</button>
              <button onClick={() => setColor('red')}>{questions[currentQuestion].incorrect_answers[2]}</button>
            </div>
          </div>
        </div>
        ) : (<p>sorry no questions</p>)
      }
        <div>
          <button className="nextQuestion" onClick={handleNextQuestion}>Next Question</button>
          <button className="goBack" onClick={handleGoBack}>Go Back</button>
        </div>
        {questions[currentQuestion] ? 'Correct!' : 'Incorrect, the correct answer is'}

      </div>

      </>
    )
  }

  export default Quiz