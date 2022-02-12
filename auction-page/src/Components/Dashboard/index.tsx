interface IPlayers{
    C_U_A: string,
    age: number,
    base_salary_in_lakhs: number,
    country: string,
    "first_Name": string, 
    surname: string, 
    sold_to_team: string,
    sold_to_team_price:any
}

interface IProps{
    players: IPlayers[]
}



const Dashboard = ({players}:IProps) => {
  const renderPlayers = players.map((player:IPlayers, idx:number) => (
    <div key={idx} className={`individual_card ${player.sold_to_team_price !== 'NA' ? 'sold':''}`}>
      <p>Name: {player.first_Name} {player.surname}</p>
      <p>Country: {player.country}</p>
      <p>Base Salary: {player.base_salary_in_lakhs > 99 ? `${player.base_salary_in_lakhs/100} Cr.`: `${player.base_salary_in_lakhs} lakh's`}</p>
      <p>Sold To: {player.sold_to_team}</p>
      <p>Sold Price: {player.sold_to_team_price > 99 ? `${player.sold_to_team_price/100} Cr.`: `${player.sold_to_team_price} lakh's`}</p>
    </div>)
  )

  return (<div className="player_container">{renderPlayers}</div>)

}


export default Dashboard;