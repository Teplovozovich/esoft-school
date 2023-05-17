import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavPanelItem.css'

const NavPanelItem = (props) => {
    return (
        <div id="nav-panel">
            <div><NavLink to="/GameTab">Игровое поле</NavLink></div>
            <div><NavLink to="/RatingTab">Рейтинг</NavLink></div>
            <div><NavLink to="/aboba">Активные игроки</NavLink></div>
            <div><NavLink to="/abobkin">История игр</NavLink></div>
            <div><NavLink to="/abobus">Список игроков</NavLink></div>
        </div>

    )
}

export default NavPanelItem;