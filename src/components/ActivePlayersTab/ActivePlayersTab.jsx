import React from 'react'

import s from './ActivePlayersTab.module.css'
import PageTitle from '../Common/PageTitle/PageTitle'
import Switch from '../Common/Switch/Switch'

const ActivePlayersTab = (props) => {
    return (
        <div className={s.mainContainer}>
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
        </div >
    )
}

export default ActivePlayersTab
