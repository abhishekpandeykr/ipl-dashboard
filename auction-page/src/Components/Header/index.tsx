import { ChangeEvent, MouseEvent } from 'react';
import './style.css'

interface IProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    showIPLTeams:(event:MouseEvent<HTMLElement>) => void;
    iplTeams:boolean;
}
const Header = ({onChange, showIPLTeams, iplTeams}:IProps) => {
    console.log(iplTeams)
    return (
        <header className='header_container'>
            <h3>IPL Auction Page</h3>
            <div className='search_bar'>
                <span onClick={showIPLTeams}>{iplTeams ? 'IPL Teams' : 'IPL Players'}</span>
                {iplTeams && <input type={'text'} placeholder={'Search Player'} onChange={onChange}/>}
            </div>
        </header>
    );
}

export default Header
