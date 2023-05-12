import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavPanelItem.css'

const NavPanelItem = (props) => {
    return (
        <div id="nav-panel">
            <div ><NavLink to="/GameTab" className="aboba">Игровое поле</NavLink></div>
            <div><NavLink to="/RatingTab">Рейтинг</NavLink></div>
            <div>Активные игроки</div>
            <div>История игр</div>
            <div>Список игроков</div>
        </div>

    )
}

export default NavPanelItem;