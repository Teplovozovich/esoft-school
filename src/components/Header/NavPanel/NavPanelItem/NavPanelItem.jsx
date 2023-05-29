import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavPanelItem.css'
import Logo from '../../Logo/Logo'

const NavPanelItem = (props) => {
    return (
        <div id="nav-panel">
            <div><NavLink className="headerA" to="/GameTab">Игровое поле</NavLink></div>
            <div><NavLink className="headerA" to="/RatingTab">Рейтинг</NavLink></div>
            <div><NavLink className="headerA" to="/ActivePlayersTab">Активные игроки</NavLink></div>
            <div><NavLink className="headerA" to="/GameHistoryTab">История игр</NavLink></div>
            <div><NavLink className="headerA" to="/PlayersListTab">Список игроков</NavLink></div>
        </div>

    )
}

export default NavPanelItem;