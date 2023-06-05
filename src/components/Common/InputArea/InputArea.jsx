import React from 'react';
import s from './InputArea.module.css'

const InputArea = (props) => {
    return (
        <div className={s.divArea}>
            <textarea className={`${s[props.className]}`} placeholder={props.placeholder} onChange={props.onChange}></textarea>
        </div>
    );
}

export default InputArea;