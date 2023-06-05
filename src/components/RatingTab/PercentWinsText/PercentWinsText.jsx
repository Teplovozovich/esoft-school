import React from 'react';
import s from './PercentWinsText.module.css'


const PercentWinsText = (props) => {
    return (
        <div>
            <div key={props.key} className={`${s.block_text} ${s.text_percent_wins}`}>{props.sumPercentWins}</div>
        </div>
    )
}

export default PercentWinsText;
