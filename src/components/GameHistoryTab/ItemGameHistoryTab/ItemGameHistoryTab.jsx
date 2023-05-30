import React from 'react'

import s from './ItemGameHistoryTab.module.css'

const ItemGameHistoryTab = (props) => {
    return (
        <div className={s.row}>
            <div className={s.firstCell}>
                <div className={s.firstPlayer}>
                    <img src={props.firstPlayerSide === "cross" ? "../assets/svg/micro-x.svg" : "../assets/svg/z.svg"} />
                    <p className={s.tableCell}>{props.firstPlayer}</p>
                    <div className={s.forCup}>
                        <img src={props.firstPlayerCup === "1" ? "../assets/svg/micro-cup.svg" : ""} />
                    </div>
                </div>
                <p className={s.against}>против</p>
                <div className={s.secondPlayer}>
                    <img src={props.secondPlayerSide === "cross" ? "../assets/svg/micro-x.svg" : "../assets/svg/z.svg"} />
                    <p className={s.tableCell}>{props.secondPlayer}</p>
                    <div className={s.forCup}>
                        <img src={props.secondPlayerCup === "1" ? "../assets/svg/micro-cup.svg" : ""} />
                    </div>
                </div>
            </div>
            <div className={s.wrap__rightSide}>
                <div className={s.secondCell}>
                    <p className={s.tableCell}>{props.date}</p>
                </div>
                <div className={s.thirdCell}>
                    <p className={s.tableCell}>{props.gameTimePlayed}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemGameHistoryTab
