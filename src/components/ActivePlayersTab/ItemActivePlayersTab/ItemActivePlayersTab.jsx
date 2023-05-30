import React from 'react'

import s from './ItemActivePlayersTab.module.css'
import GameStatus from './../../Common/Labels/GameStatus/GameStatus'
import CallPlayerButton from './../../Common/CallPlayerButton/CallPlayerButton'

const ItemActivePlayersTab = (props) => {
    return (
        <div className={s.row}>
            <p className={s.textTable}>{props.textItem}</p>
            <div className={s.buttons}>
                <GameStatus className={props.className} textLabel={props.textLabel} />
                <CallPlayerButton className={props.className} textButton="Позвать игрока" />
            </div>
        </div>
    )
}

export default ItemActivePlayersTab
