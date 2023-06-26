import React from 'react'
import './OutButton.css'
import { NavLink } from 'react-router-dom'

const OutButton = (props) => {
    return (
        <div id="signOutButton">
            <NavLink to="/"><img src='./assets/svg/signout-icon.svg' /></NavLink>
        </div>

    )
}

export default OutButton;