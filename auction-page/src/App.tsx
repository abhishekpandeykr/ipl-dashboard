import { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Dashboard from './Components/Dashboard';
import './App.css'

function App() {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/players')
      .then(res => res.json())
      .then(res => {
        setPlayers(res)
      })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <Dashboard players={players} />
    </div>
  )
}

export default App
