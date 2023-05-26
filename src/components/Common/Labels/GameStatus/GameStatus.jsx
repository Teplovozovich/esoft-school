import React from 'react';
import s from './GameStatus.module.css'

const GameStatus = (props) => {
    return (

        <div>
            <div className={`${s[props.className]}`} onClick={props.onClick}><p className={s.labelInButton}>{`${props.textLabel}`}</p></div>
        </div>
    );
}

export default GameStatus;