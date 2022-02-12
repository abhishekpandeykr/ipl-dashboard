import { nameMapping, IPL_TEAM_LOGO } from '../../constants/teamLogo'
import './style.css'

type IProps = {
    teams: any;
}

const priceConverter = (price:number) => {
    if(price < 99){
        return `${price} Lakhs`
    } else {
        return `${(price/100).toFixed(2)} Cr`
    }
}

const TeamTable = ({teams}:IProps) => {

    return (
        <div className="team_wrapper">
            {teams.map(({team, players}:any, idx:number) => (
                <div className="wrapper" key={idx}>
                    <div className='logo_wrapper'>
                        <img src={IPL_TEAM_LOGO[team]} alt={team} height="60"/>
                        <h2>{nameMapping[team]}</h2>
                    </div>
                    <table key={idx}>
                        <tr>
                            <th>Player name</th>
                            <th>Country</th>
                            <th>Base Price</th>
                            <th>Sold To</th>
                        </tr>
                        {players.map((player:any, idx:number) => (
                            <tr key={player?.list_sr_no}>
                                <td>{`${player?.first_Name} ${player?.surname}`}</td>
                                <td>{player?.country}</td>
                                <td>{priceConverter(player?.base_salary_in_lakhs)}</td>
                                <td >{priceConverter(player?.sold_to_team_price)}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            ))}
        </div>
    )
}

export default TeamTable