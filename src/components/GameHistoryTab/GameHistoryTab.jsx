import React, { useState } from 'react'

import s from './GameHistoryTab.module.css'
import PageTitle from './../Common/PageTitle/PageTitle'
import ItemGameHistoryTab from './ItemGameHistoryTab/ItemGameHistoryTab';

const GameHistoryTab = (props) => {
    const [isFreeOnly, setIsFreeOnly] = useState(false);

    let itemsGameHistoryDataTable = props.itemsGameHistoryTable.map(element => <ItemGameHistoryTab
        id={element.id}
        gameTimePlayed={element.gameTimePlayed}
        date={element.date}
        firstPlayer={element.firstPlayer}
        secondPlayer={element.secondPlayer}
        firstPlayerSide={element.firstPlayerSide}
        secondPlayerSide={element.secondPlayerSide}
        firstPlayerCup={element.firstPlayerCup}
        secondPlayerCup={element.secondPlayerCup}
    />)

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
                    {itemsGameHistoryDataTable}
                </div>
            </div>

        </div >
    )
}

export default GameHistoryTab
