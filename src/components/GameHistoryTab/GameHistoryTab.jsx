import React, { useState } from 'react'

import s from './GameHistoryTab.module.css'
import PageTitle from './../common/PageTitle/PageTitle'
import ItemGameHistoryTab from './ItemGameHistoryTab/ItemGameHistoryTab';

const GameHistoryTab = (props) => {
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


    const handleSwitchChange = (event) => {
        setIsFreeOnly(event.target.checked);
    }

    return (
        <div className={s.mainContainer}>
            <div className={s.table__wrap}>
                <PageTitle textPageTitle="История игр" />
            </div>
            <div className={s.table__wrap}>
                <div className={s.table}>
                    <div className={s.thead}>
                        <div className={s.firstCell}>
                            <p className={s.theadCell}>Игроки</p>
                        </div>
                        <div className={s.secondCell}>
                            <p className={s.theadCell}>Дата</p>
                        </div>
                        <div className={s.thirdCell}>
                            <p className={s.theadCell}>Время игры</p>
                        </div>
                    </div>
                    <ItemGameHistoryTab />
                </div>
            </div>

        </div >
    )
}

export default GameHistoryTab
