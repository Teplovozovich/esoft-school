import React from 'react';
import PageTitle from '../common/PageTitle/PageTitle';
import s from './RatingTab.module.css'
import TableTextBlockName from './TableTextBlockName/TableTextBlockName';



function WinsNumText(props) {
    return (
        <div className={`${s.block_text} ${s.text_wins}`}>
            {props.sumWins}
        </div>
    )
}

function LossesNumText(props) {
    return (
        <div className={`${s.block_text} ${s.text_losses}`}>{props.sumLosses}</div>

    )
}

function AllGameText(props) {
    return (
        <div className={s.block_text}>{props.}</div>
    )
}

let RatingTab = (props) => {
    let fullNamaeData = [
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

    let tableTextBlockNameItems = fullNamaeData
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

    return (
        <div>
            <main id={s.main_container}>
                <div className={s.container}>

                    <PageTitle textPageTitle="Рейтинг игроков" />
                    <div className={s.blocks}>
                        <div className={s.block}>
                            <div className={`${s.block_title} ${s.long_cell}`}>ФИО</div>
                            {tableTextBlockNameItems}
                        </div>
                        <div className={s.block}>
                            <div className={s.block_title}>Всего игр</div>
                            <div className={s.block_text}>24534</div>
                            <div className={s.block_text}>24534</div>
                            <div className={s.block_text}>24534</div>
                            <div className={s.block_text}>24534</div>
                            <div className={s.block_text}>24534</div>
                            <div className={s.block_text}>24534</div>
                            <div className={s.block_text}>24534</div>
                            <div className={s.block_text}>24534</div>
                            <div className={s.block_text}>24534</div>
                            <div className={s.block_text}>24534</div>
                            <div className={s.block_text}>24534</div>
                            <div className={s.block_text}>24534</div>
                            <div className={s.block_text}>24534</div>
                            <div className={s.block_text}>24534</div>
                        </div>
                        <div className={s.block}>
                            <div className={s.block_title}>Победы</div>
                            {winsNumDateItems}
                        </div>
                        <div className={s.block}>
                            <div className={s.block_title}>Проигрыши</div>
                            {lossesDateItems}
                        </div>
                        <div className={s.block}>
                            <div className={`${s.block_title} ${s.percent_of_win}`}>Процент побед</div>
                            <div className={`${s.block_text} ${s.text_percent_wins}`}>87%</div>
                            <div className={`${s.block_text} ${s.text_percent_wins}`}>87%</div>
                            <div className={`${s.block_text} ${s.text_percent_wins}`}>87%</div>
                            <div className={`${s.block_text} ${s.text_percent_wins}`}>87%</div>
                            <div className={`${s.block_text} ${s.text_percent_wins}`}>87%</div>
                            <div className={`${s.block_text} ${s.text_percent_wins}`}>87%</div>
                            <div className={`${s.block_text} ${s.text_percent_wins}`}>87%</div>
                            <div className={`${s.block_text} ${s.text_percent_wins}`}>87%</div>
                            <div className={`${s.block_text} ${s.text_percent_wins}`}>87%</div>
                            <div className={`${s.block_text} ${s.text_percent_wins}`}>87%</div>
                            <div className={`${s.block_text} ${s.text_percent_wins}`}>87%</div>
                            <div className={`${s.block_text} ${s.text_percent_wins}`}>87%</div>
                            <div className={`${s.block_text} ${s.text_percent_wins}`}>87%</div>
                            <div className={`${s.block_text} ${s.text_percent_wins}`}>87%</div>
                        </div>
                    </div>
                </div>
            </main >

        </div >
    );
}

export default RatingTab;
