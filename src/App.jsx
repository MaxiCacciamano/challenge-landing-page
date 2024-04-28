import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './Component/Home/Home'
import { NavBar } from './Component/Nav/NavBar'
import { Info } from './Component/Info/Info'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
    <div className='home-container'>
      <Home/>
    </div>
    <Info/>
    </div>
  )
}

export default App
