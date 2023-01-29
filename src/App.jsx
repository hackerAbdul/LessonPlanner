import { useState } from 'react'
import Form from './components/form'

function App() {
  const [count, setCount] = useState(1)

  return (
    <div className="container">
      <header>
        <h1>Lesson Plans</h1>
      </header>
      <Form />
    </div>
  )
}

export default App
