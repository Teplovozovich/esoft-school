import React from 'react';
import s from './CallPlayerButton.module.css'

const CallPlayerButton = (props) => {
    return (

        <div>
            <button className={`${s[props.className]}`} id={`${s[props.id]}`} onClick={props.onClick}><p className={s.labelInButton}>{`${props.textButton}`}</p></button>
        </div>
    );
}

export default CallPlayerButton;