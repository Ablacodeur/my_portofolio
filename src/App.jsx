import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Browser from './Components/Browser/Browser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Browser />
    </>
  )
}

export default App
