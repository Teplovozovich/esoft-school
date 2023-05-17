import React from 'react';
import s from './LossesNumText.module.css'


const LossesNumText = (props) => {
    return (
        <div className={`${s.block_text} ${s.text_losses}`}>{props.sumLosses}</div>

    )
}

export default LossesNumText;
