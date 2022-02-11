import { ChangeEvent, useEffect, useState } from 'react'
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/players')
      .then(res => res.json())
      .then(res => {
        setPlayers(res.players)
      })
  },[])

  const searchPlayer = (event:ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, "value")
  }

  return (
    <div className="App">
      <Header onChange={searchPlayer}/>
      <Dashboard players={players}/>
    </div>
  )
}

export default App
