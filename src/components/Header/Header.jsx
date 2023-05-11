import React from 'react'
import './Header.css'
import Logo from './Logo/Logo';
import NavPanel from './NavPanel/NavPanel';
import OutButton from './OutButton/OutButton';


const Header = (props) => {
    return (
        <header>
            <Logo />
            <NavPanel />
            <OutButton />
        </header>

    )
}

export default Header;