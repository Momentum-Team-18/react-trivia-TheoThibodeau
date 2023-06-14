import { useState } from 'react'
import './App.css'
import Category from './Category'
import Quiz from './quiz'

function App() {

  return (
    <>
      <Quiz />
    </>
  )
}
// function App({categories}) {
//     const[selectedCategory, setSelectedCategories] = useState('')
//       if (selectedCategory) {return <Quiz />}
//   return (
//     <>
//     {selectedCategory ? <Quiz /> : <Category />}
//     </>
//   )
// }

export default App
