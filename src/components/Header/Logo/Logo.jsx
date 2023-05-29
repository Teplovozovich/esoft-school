import React from 'react'
import './Logo.css'
import { NavLink } from 'react-router-dom'

const Logo = (props) => {
    return (
        <div id="logo">
            <div><NavLink to="/ActivePlayersTab"><a><img src='./assets/svg/s-logo.svg' /></a></NavLink></div>

        </div>

    )
}

export default Logo;