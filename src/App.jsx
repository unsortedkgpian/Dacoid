import { useState } from 'react'
import Topbar from './components/Topbar/Topbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Topbar/>
    </>
  )
}

export default App
