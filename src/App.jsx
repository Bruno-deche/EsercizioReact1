import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavaBar from './Navbar/Navabar'
import Footer from './Footer/Footer'
import Card from './Card/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <NavaBar/>
        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Card/>
      </div>
      <Footer/>
    </>
  )
}

export default App
