import { ChangeEvent } from 'react';
import './style.css'

interface IProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const Header = ({onChange}:IProps) => {
    return (
        <header className='header_container'>
            <h3>IPL Auction Page</h3>
            <input type={'text'} placeholder={'Search Player'} onChange={onChange}/>
        </header>
    );
}

export default Header
