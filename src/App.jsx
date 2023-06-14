import { useState } from 'react'
import './App.css'
import Category from './Category'
import Quiz from './quiz'

// function App() {

//   return (
//     <>
//       <Category />
//     </>
//   )
// }
function App({categoryID}) {
    const[Category, Quiz] = useState('2')
  return (
    <>
    {categoryID ? (
      <Category />
    )  : ( 
      <Quiz />)
    }
    </>
  )
}

export default App
