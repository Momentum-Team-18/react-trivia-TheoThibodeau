import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Quiz() {
    const [questions, setQuestions] = useState([])
    const questionURL = 'https://opentdb.com/api.php?amount=10&category=9'

    useEffect(() => {
        axios.get(questionURL).then((response) => setQuestions(response.data.results))
    }, [])

    console.log(questions)
    return (
      <>
      <h1>Quiz</h1>
      <div>
            {questions.map((question) => (
                <ul>
                    <p>{question.question}</p>
                </ul>
            ))}
        </div>
      </>
    )
  }

  export default Quiz