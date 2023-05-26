import React, { useState } from 'react'

import s from './ActivePlayersTab.module.css'
import PageTitle from '../Common/PageTitle/PageTitle'
import Switch from '../Common/Switch/Switch'
import ItemActivePlayersTab from './ItemActivePlayersTab/ItemActivePlayersTab'

const ActivePlayersTab = (props) => {
    const [isFreeOnly, setIsFreeOnly] = useState(false);

    let itemsActivePlayers = [
        { id: 1, name: "Александров Игнат Анатолиевич", status: "primaryButton", textLabel: "Свободен" },
        { id: 2, name: "Василенко Эрик Платонович", status: "secondaryButton", textLabel: "В игре" },
        { id: 3, name: "Быков Юрий Виталиевич", status: "primaryButton", textLabel: "Свободен" },
        { id: 4, name: "Галкин Феликс Платонович", status: "secondaryButton", textLabel: "В игре" },
        { id: 5, name: "Комаров Цефас Александрович", status: "secondaryButton", textLabel: "В игре" },
        { id: 6, name: "Шевченко Рафаил Михайлович", status: "secondaryButton", textLabel: "В игре" },
        { id: 7, name: "Гордеев Шамиль Леонидович", status: "primaryButton", textLabel: "Свободен" },
        { id: 8, name: "Бобров Фёдор Викторович", status: "primaryButton", textLabel: "Свободен" },
        { id: 9, name: "Суворов Феликс Григорьевич", status: "secondaryButton", textLabel: "В игре" },
        { id: 10, name: "Марков Йошка Фёдорович", status: "primaryButton", textLabel: "Свободен" }
    ]

    let filteredItemsActivePlayers = itemsActivePlayers.filter(player => !isFreeOnly || player.textLabel === "Свободен");

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
