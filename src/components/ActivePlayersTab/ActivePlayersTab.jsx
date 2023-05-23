import React from 'react'

import s from './ActivePlayersTab.module.css'
import PageTitle from '../Common/PageTitle/PageTitle'
import Switch from '../Common/Switch/Switch'
import GameStatus from '../Common/Labels/GameStatus/GameStatus'
import CallPlayerButton from '../Common/CallPlayerButton/CallPlayerButton'

const ActivePlayersTab = (props) => {
    return (
        <div className={s.mainContainer}>
            <div className={s.table__wrap}>
                <div className={s.activePlayersTitle}>
                    <div className={s.title}>
                        <PageTitle textPageTitle="Активные игроки" />
                    </div>
                    <div className={s.textSwitch}>
                        <p>Только свободные</p>
                        <label class={s.switch_btn}>
                            <Switch />
                        </label>
                    </div>
                </div>
            </div>
            <div className={s.table__wrap}>
                <div className={s.table}>
                    <div className={s.row}>
                        <p className={s.textTable}>Александров Игнат Анатолиевич</p>
                        <div className={s.buttons}>
                            <GameStatus className="primaryButton" textButton="Свободен" />
                            <CallPlayerButton className="primaryButton" textButton="Позвать игрока" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ActivePlayersTab
