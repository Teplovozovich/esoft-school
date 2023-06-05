import React from 'react';
import s from './WinsNumText.module.css'


const WinsNumText = (props) => {
    return (
        <div key={props.key} className={`${s.block_text} ${s.text_wins}`}>
            {props.sumWins}
        </div>
    );
}

export default WinsNumText;
