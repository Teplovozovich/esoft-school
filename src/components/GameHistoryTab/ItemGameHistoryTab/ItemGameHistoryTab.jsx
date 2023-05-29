import React from 'react'

import s from './ItemGameHistoryTab.module.css'

const ItemGameHistoryTab = (props) => {
    return (
        <div className={s.row}>
            <div className={s.firstCell}>
                <div className={s.firstPlayer}>
                    <img src="../assets/svg/z.svg" />
                    <p className={s.tableCell}>Терещенко У. Р.</p>
                    <div className={s.forCup}><img src="../assets/svg/micro-cup.svg" /></div>
                </div>
                <p className={s.against}>против</p>
                <div className={s.secondPlayer}>
                    <img src="../assets/svg/micro-x.svg" />
                    <p className={s.tableCell}>Многогрешный П. В.</p>
                    <div className={s.forCup}><img src="../assets/svg/micro-cup.svg" /></div>
                </div>
            </div>
            <div className={s.secondCell}>
                <p className={s.tableCell}>12 февраля 2022</p>
            </div>
            <div className={s.thirdCell}>
                <p className={s.tableCell}>43 мин 13 сек</p>
            </div>
        </div>
    )
}

export default ItemGameHistoryTab
