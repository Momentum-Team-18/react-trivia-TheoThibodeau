import * as React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Category from './Category'

function Quiz({categoryID}) {
    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const questionURL = `https://opentdb.com/api.php?amount=10&category=${categoryID}`
    const [color, setColor] = useState('')
    const [score, setScore] = useState(0)
    const [finalScore, setFinalScore] = useState()

    useEffect(() => {
        axios.get(questionURL).then((response) => setQuestions(response.data.results))}, [categoryID])

    const handleNextQuestion = () => {
      setCurrentQuestion(currentQuestion + 1)
      setColor('')
    }

    const handleAnswer = (answer) => {
      if (answer === questions[currentQuestion].correct_answer) {
        setColor('green');
        setScore(score + 1)
        // setFinalScore(finalScore + 1) doesn't do anything yet
      } else {
        setColor('red');
      }
    };

    const handleGoBack = () => {
      setCurrentQuestion(0)
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
              <button className={color} onClick={() => handleAnswer(questions[currentQuestion].correct_answer)}>
                {questions[currentQuestion].correct_answer}</button>
            <div className='answerButtons'>
              <button className={color} onClick={() => setColor('red')}>{questions[currentQuestion].incorrect_answers[0]}</button>
              <button className={color} onClick={() => setColor('red')}>{questions[currentQuestion].incorrect_answers[1]}</button>
              <button className={color} onClick={() => setColor('red')}>{questions[currentQuestion].incorrect_answers[2]}</button>
            </div>
          </div>
        </div>
        ) : (<p>sorry no questions</p>)
      }
        <div>
          <button className="nextQuestion" onClick={handleNextQuestion}>Next Question</button>
        </div>
        {color === 'green' ? ('Correct!') : color === 'red' ? (`Incorrect, the correct answer is: 
        ${questions[currentQuestion].correct_answer}`) : ('')}
        <p>Your Score: {score}/10</p>
    </div>
    {/* <div>
      {currentQuestion === question.length[9] (
        <div>Your Final Score: {finalScore}/10</div>
      )}
    </div> */}
      </>
    )
  }

  export default Quiz

  // things that i still need to do:
  // show a final score and ask to play again
  // overall styling
  // map the buttons:
  //   so i can fix styling
  //   randomize the buttons
  // goback button
  // the words are still messed up
    