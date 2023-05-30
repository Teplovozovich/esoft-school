import React, { useState } from 'react'

import s from './GameHistoryTab.module.css'
import PageTitle from './../Common/PageTitle/PageTitle'
import ItemGameHistoryTab from './ItemGameHistoryTab/ItemGameHistoryTab';

const GameHistoryTab = (props) => {
    const [isFreeOnly, setIsFreeOnly] = useState(false);

    let itemsGameHistoryTable = [
        { id: 1, firstPlayer: "Терещенко У. Р.", firstPlayerSide: "zero", firstPlayerCup: "1", secondPlayer: "Многогрешный П. В.", secondPlayerSide: "cross", secondPlayerCup: "0", date: "12 февраля 2022", gameTimePlayed: "43 мин 13 сек" },
        { id: 2, firstPlayer: "Горбачёв А. Д.", firstPlayerSide: "zero", firstPlayerCup: "0", secondPlayer: "Многогрешный П. В.", secondPlayerSide: "cross", secondPlayerCup: "1", date: "12 февраля 2022", gameTimePlayed: "43 мин 13 сек" },
        { id: 3, firstPlayer: "Константинов В. Н.", firstPlayerSide: "zero", firstPlayerCup: "1", secondPlayer: "Сасько Ц. А.", secondPlayerSide: "cross", secondPlayerCup: "0", date: "12 февраля 2022", gameTimePlayed: "43 мин 13 сек" },
        { id: 4, firstPlayer: "Никифорова Б. А.", firstPlayerSide: "zero", firstPlayerCup: "0", secondPlayer: "Горбачёв А. Д.", secondPlayerSide: "cross", secondPlayerCup: "1", date: "12 февраля 2022", gameTimePlayed: "43 мин 13 сек" },
        { id: 5, firstPlayer: "Кулишенко К. И.", firstPlayerSide: "zero", firstPlayerCup: "0", secondPlayer: "Вишняков Ч. М.", secondPlayerSide: "cross", secondPlayerCup: "1", date: "12 февраля 2022", gameTimePlayed: "43 мин 13 сек" },
        { id: 6, firstPlayer: "Гриневска Д. Б.", firstPlayerSide: "zero", firstPlayerCup: "0", secondPlayer: "Кудрявцев Э. В.", secondPlayerSide: "cross", secondPlayerCup: "1", date: "12 февраля 2022", gameTimePlayed: "43 мин 13 сек" },
        { id: 7, firstPlayer: "Нестеров Х. А.", firstPlayerSide: "zero", firstPlayerCup: "1", secondPlayer: "Исаева О. А.", secondPlayerSide: "cross", secondPlayerCup: "0", date: "12 февраля 2022", gameTimePlayed: "43 мин 13 сек" },
        { id: 8, firstPlayer: "Исаева О. А.", firstPlayerSide: "zero", firstPlayerCup: "0", secondPlayer: "Кулишенко К. И.", secondPlayerSide: "cross", secondPlayerCup: "1", date: "12 февраля 2022", gameTimePlayed: "43 мин 13 сек" },
        { id: 9, firstPlayer: "Коновалова В. В.", firstPlayerSide: "zero", firstPlayerCup: "0", secondPlayer: "Терещенко У. Р.", secondPlayerSide: "cross", secondPlayerCup: "1", date: "12 февраля 2022", gameTimePlayed: "43 мин 13 сек" },
        { id: 10, firstPlayer: "Казаков Х. Е.", firstPlayerSide: "zero", firstPlayerCup: "1", secondPlayer: "Овчаренко Б. М.", secondPlayerSide: "cross", secondPlayerCup: "0", date: "12 февраля 2022", gameTimePlayed: "43 мин 13 сек" },
        { id: 11, firstPlayer: "Сасько Ц. А.", firstPlayerSide: "zero", firstPlayerCup: "0", secondPlayer: "Никифорова Б. А.", secondPlayerSide: "cross", secondPlayerCup: "1", date: "12 февраля 2022", gameTimePlayed: "43 мин 13 сек" },

    ]

    let itemsGameHistoryDataTable = itemsGameHistoryTable.map(element => <ItemGameHistoryTab
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
