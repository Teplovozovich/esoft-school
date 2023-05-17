import React from 'react';
import s from './AllGamesText.module.css'


const AllGamesText = (props) => {
    return (
        <div className={s.block_text}>{props.sumAllGames}</div>
    )
}

export default AllGamesText;
