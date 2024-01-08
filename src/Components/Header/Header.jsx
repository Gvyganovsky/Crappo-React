import style from './Header.module.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';

export const Header = () => {
    return (
        <header className={style.header}>
            <Link to='./HomePage'><Logo /></Link>
            <Link to='./RegistrationPage'><button className={style.header_button}>Register</button></Link>
        </header>
    )
}