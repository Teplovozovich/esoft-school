import React from 'react';
import PageTitle from './../Common/PageTitle/PageTitle';
import s from './RatingTab.module.css'
import TableTextBlockName from './TableTextBlockName/TableTextBlockName';
import WinsNumText from './WinsNumText/WinsNumText';
import LossesNumText from './LossesNumText/LossesNumText';
import AllGamesText from './AllGamesText/AllGamesText';
import PercentWinsText from './PercentWinsText/PercentWinsText';

let RatingTab = (props) => {
    let tableTextBlockNameItems = props.fullNamaData.map(element => <TableTextBlockName key={element.id} fullName={element.name} />)
    let winsNumDateItems = props.winsNumDate.map(element => <WinsNumText key={element.id} sumWins={element.sum} />)
    let lossesDateItems = props.lossesDate.map(element => <LossesNumText key={element.id} sumLosses={element.sum}></LossesNumText>)
    let allGamesDateItems = props.allGamesDate.map(element => <AllGamesText key={element.id} sumAllGames={element.sum} />)
    let percentWinsDateItems = props.percentWinsDate.map(element => <PercentWinsText key={element.id} sumPercentWins={element.sum} />)

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
