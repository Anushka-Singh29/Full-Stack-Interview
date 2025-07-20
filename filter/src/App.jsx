import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Expense Filtering Application</h1>
      <form action="" method="get">
        <input type="text" /> Expense
        <br />
        <br />
        <input type="number" name="amount" id="" /> Amount
        <br />
        <br />
        <input type="text" /> Description
      </form>

    </>
  )
}

export default App
