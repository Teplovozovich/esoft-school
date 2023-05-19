import React from 'react';
import PageTitle from '../Common/PageTitle/PageTitle';
import s from './RatingTab.module.css'
import TableTextBlockName from './TableTextBlockName/TableTextBlockName';
import WinsNumText from './WinsNumText/WinsNumText';
import LossesNumText from './LossesNumText/LossesNumText';
import AllGamesText from './AllGamesText/AllGamesText';
import PercentWinsText from './PercentWinsText/PercentWinsText';

let RatingTab = (props) => {
    let fullNamaData = [
        { name: "Александров Игнат Анатолиевич" },
        { name: "Шевченко Рафаил Михайлович" },
        { name: "Мазайло Трофим Артёмович" },
        { name: "Логинов Остин Данилович" },
        { name: "Борисов Йошка Васильевич" },
        { name: "Соловьёв Ждан Михайлович" },
        { name: "Негода Михаил Эдуардович" },
        { name: "Гордеев Шамиль Леонидович" },
        { name: "Многогрешный Павел Виталиевич" },
        { name: "Александров Игнат Анатолиевич" },
        { name: "Волков Эрик Алексеевич" },
        { name: "Кузьмин Ростислав Васильевич" },
        { name: "Стрелков Филипп Борисович" },
        { name: "Галкин Феликс Платонович" }
    ]

    let tableTextBlockNameItems = fullNamaData
        .map(element => <TableTextBlockName fullName={element.name} />)

    let winsNumDate = [
        { sum: 9824 },
        { sum: 9824 },
        { sum: 9824 },
        { sum: 9824 },
        { sum: 9824 },
        { sum: 9824 },
        { sum: 9824 },
        { sum: 9824 },
        { sum: 9824 },
        { sum: 9824 },
        { sum: 9824 },
        { sum: 9824 },
        { sum: 9824 },
        { sum: 9824 }
    ]

    let winsNumDateItems = winsNumDate.map(element => <WinsNumText sumWins={element.sum} />)

    let lossesDate = [
        { sum: 1222 },
        { sum: 1222 },
        { sum: 1222 },
        { sum: 1222 },
        { sum: 1222 },
        { sum: 1222 },
        { sum: 1222 },
        { sum: 1222 },
        { sum: 1222 },
        { sum: 1222 },
        { sum: 1222 },
        { sum: 1222 },
        { sum: 1222 },
        { sum: 1222 }
    ]

    let lossesDateItems = lossesDate.map(element => <LossesNumText sumLosses={element.sum}></LossesNumText>)

    let allGamesDate = [
        { sum: 24534 },
        { sum: 24534 },
        { sum: 24534 },
        { sum: 24534 },
        { sum: 24534 },
        { sum: 24534 },
        { sum: 24534 },
        { sum: 24534 },
        { sum: 24534 },
        { sum: 24534 },
        { sum: 24534 },
        { sum: 24534 },
        { sum: 24534 },
        { sum: 24534 }
    ]

    let allGamesDateItems = allGamesDate.map(element => <AllGamesText sumAllGames={element.sum} />)

    let percentWinsDate = [
        { sum: '87%' },
        { sum: '87%' },
        { sum: '87%' },
        { sum: '87%' },
        { sum: '87%' },
        { sum: '87%' },
        { sum: '87%' },
        { sum: '87%' },
        { sum: '87%' },
        { sum: '87%' },
        { sum: '87%' },
        { sum: '87%' },
        { sum: '87%' },
        { sum: '87%' }
    ]

    let percentWinsDateItems = percentWinsDate.map(element => <PercentWinsText sumPercentWins={element.sum} />)

    return (
        <div className={s.ratingTab}>
            <main id={s.main_container}>
                <div className={s.container}>

                    <PageTitle textPageTitle="Рейтинг игроков" />
                    <div className={s.blocks}>
                        <div className={s.block}>
                            <div className={`${s.block_title} ${s.table_header} ${s.long_cell}`}>ФИО</div>
                            {tableTextBlockNameItems}
                        </div>
                        <div className={s.block}>
                            <div className={`${s.block_title} ${s.table_header} ${s.allGames}`}>Всего игр</div>
                            {allGamesDateItems}
                        </div>
                        <div className={s.block}>
                            <div className={`${s.block_title} ${s.table_header} ${s.wins}`}>Победы</div>
                            {winsNumDateItems}
                        </div>
                        <div className={s.block}>
                            <div className={`${s.block_title} ${s.table_header} ${s.losses}`}>Проигрыши</div>
                            {lossesDateItems}
                        </div>
                        <div className={s.block}>
                            <div className={`${s.block_title} ${s.table_header} ${s.percent_of_win} ${s.winsPercent}`}>Процент побед</div>
                            {percentWinsDateItems}
                        </div>
                    </div>
                </div>
            </main >

        </div >
    );
}

export default RatingTab;
