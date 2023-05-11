import React from 'react'
import './NavPanelItem.css'

const NavPanelItem = (props) => {
    return (
        <div id="nav-panel">
            <div className="active">Игровое поле</div>
            <div>Рейтинг</div>
            <div>Активные игроки</div>
            <div>История игр</div>
            <div>Список игроков</div>
        </div>

    )
}

export default NavPanelItem;