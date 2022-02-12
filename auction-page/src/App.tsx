import { ChangeEvent, useEffect, useState } from 'react'
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import flags from './constants/flags';
import './App.css'

interface IPlayers{
  C_U_A: string,
  age: number,
  base_salary_in_lakhs: number,
  country: string,
  "first_Name": string, 
  surname: string, 
}

const APP_URL = "https://ipl-auction-board.herokuapp.com/"

function App() {
  const [players, setPlayers] = useState([])
  const [allPlayers, setAllPlayers] = useState([])
  const [countries, setCountries] = useState([])
  const [selected, setSelected] = useState('All')

  useEffect(() => {
    fetch(`${APP_URL}/players`)
      .then(res => res.json())
      .then(res => {
        setPlayers(res.players)
        setAllPlayers(res.players)
        // get all countries and store in countires array
        let countries = res.players.map((player:IPlayers) => player.country)
        countries = ['All', ...new Set(countries)]
        setCountries(countries)
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

  const selectedCountry = (country:string) => async (event:any) => { 
    setSelected(country)
    if(country === 'All'){
      setPlayers(allPlayers)
    } else {
      const countriesWithVal = await fetch(`${APP_URL}/players/${country}`)
      const res = await countriesWithVal.json()
      setPlayers(res.players)
    }
  }

  return (
    <div className="App">
      <Header onChange={searchPlayer}/>
      <div className='label_wrapper'>
        {countries.map((country:string, idx:number) => (
          <div key={idx} className={`country_chip ${selected === country ? 'active':''}`} onClick={selectedCountry(country)}>
            <img src={flags[country]} alt={country}/>
            {country}
          </div>)
        )}
      </div>
      <Dashboard players={players}/>
    </div>
  )
}

export default App
