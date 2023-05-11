import React from 'react'
import './Header.css'
import Logo from './Logo/Logo';
import NavPanel from './NavPanel/NavPanel';


const Header = (props) => {
    return (
        <header>
            <Logo />
            <NavPanel />
            <button><img src="../assets/svg/signout-icon.svg" /></button>
        </header>

    )
}

export default Header;