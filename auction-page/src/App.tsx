import { ChangeEvent, useEffect, useState } from 'react'
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import './App.css'

interface IPlayers{
  C_U_A: string,
  age: number,
  base_salary_in_lakhs: number,
  country: string,
  "first_Name": string, 
  surname: string, 
}

function App() {
  const [players, setPlayers] = useState([])
  const [allPlayers, setAllPlayers] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/players')
      .then(res => res.json())
      .then(res => {
        setPlayers(res.players)
        setAllPlayers(res.players)
      })
  },[])

  const searchPlayer = (event:ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value
    const filteredPlayers = players.filter((player:IPlayers) => (`${player.surname} ${player.first_Name}`).toLowerCase().includes(searchValue.toLowerCase()))
    if(!searchValue){
      setPlayers(allPlayers)
    } else {
      setPlayers(filteredPlayers)
    }
  }

  return (
    <div className="App">
      <Header onChange={searchPlayer}/>
      <Dashboard players={players}/>
    </div>
  )
}

export default App
