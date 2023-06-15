import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Quiz from './Quiz'

function Category() {
    const [categories, setCategories] = useState([])
    const [categoryID, setCategoryID] = useState(null)
    const URL = 'https://opentdb.com/api_category.php'

    useEffect(() => {
        axios.get(URL).then((response) => setCategories(response.data.trivia_categories))
    }, [])

    const handleCategoryID = (id) => {
        setCategoryID(id)
    }

    console.log(categoryID)
    return (
      <>
    <h1>Trivia Categories</h1>
    {/* <h3>Choose Your 10 Question Quiz From the Categories Below:</h3> */}
      {categoryID ? <Quiz categoryID={categoryID} /> : 
        <div>
            {categories.map((category) => (
                <ul key={category.id}>
                    <button onClick={() => handleCategoryID(category.id)}>{category.name}</button>
                </ul>
            ))}
        </div>}
      </>
    )
  }

  export default Category