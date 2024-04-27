import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './Component/Home/Home'
import { NavBar } from './Component/Nav/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
    <div className=''>
      <Home/>
    </div>
    </div>
  )
}

export default App
