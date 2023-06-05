import React, { useState } from 'react'

import s from './ActivePlayersTab.module.css'
import PageTitle from './../Common/PageTitle/PageTitle.jsx'
import Switch from './../Common/Switch/Switch'
import ItemActivePlayersTab from './ItemActivePlayersTab/ItemActivePlayersTab'

const ActivePlayersTab = (props) => {
    const [isFreeOnly, setIsFreeOnly] = useState(false);

    let filteredItemsActivePlayers = props.itemsActivePlayers.filter(player => !isFreeOnly || player.textLabel === "Свободен");
    let itemsActivePlayersData = filteredItemsActivePlayers.map(element => <ItemActivePlayersTab className={element.status} textItem={element.name} textLabel={element.textLabel} />)

    const handleSwitchChange = (event) => {
        setIsFreeOnly(event.target.checked);
    }

    return (
        <div className={s.mainContainer}>
            <div className={s.table__wrap}>
                <div className={s.activePlayersTitle}>
                    <div className={s.title}>
                        <PageTitle textPageTitle="Активные игроки" />
                    </div>
                    <div className={s.textSwitch}>
                        <p>Только свободные</p>
                        <label className={s.switch_btn}>
                            <Switch onChange={handleSwitchChange} />
                        </label>
                    </div>
                </div>
            </div>
            <div className={s.table__wrap}>
                {itemsActivePlayersData}
            </div>

        </div >
    )
}

export default ActivePlayersTab
