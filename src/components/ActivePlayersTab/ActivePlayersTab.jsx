import React from 'react'

import s from './ActivePlayersTab.module.css'
import PageTitle from '../Common/PageTitle/PageTitle'

const ActivePlayersTab = (props) => {
    return (
        <div className={s.mainContainer}>
            <div className={s.activePlayersTitle}>
                <div className={s.title}>
                    <PageTitle textPageTitle="Активные игроки" />
                </div>
                <div className={s.textSwitch}>
                    <p></p>
                    <label class={s.switch}>
                        <input type="checkbox"></input>
                        <span class={s.slider}></span>
                    </label>
                </div>
            </div>
        </div >
    )
}

export default ActivePlayersTab
