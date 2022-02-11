interface IPlayers{
    C_U_A: string,
    age: number,
    base_salary_in_lakhs: number,
    country: string,
    "first_Name": string, 
    surname: string, 
}

interface IProps{
    players: IPlayers[]
}


const Dashboard = ({players}:IProps) => {
    console.log(players)
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;