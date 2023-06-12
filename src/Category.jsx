import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Quiz from './quiz'

function Category() {
    const [categories, setCategories] = useState([])
    const URL = 'https://opentdb.com/api_category.php'

    useEffect(() => {
        axios.get(URL).then((response) => setCategories(response.data.trivia_categories))
    }, [])

    console.log(categories)
    return (
      <>
      <h1>Trivia Categories</h1>
        <ul>
            {categories.map((category) => (
                <h3 key={category.id}><a href="#">{category.name}</a></h3>
            ))}
        </ul>
      </>
    )
  }

  export default Category