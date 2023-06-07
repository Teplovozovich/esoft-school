import React from 'react';
import s from './InputArea.module.css';

const InputArea = (props) => {
    return (
        <div className={s.divArea}>
            <input
                className={s[props.className]}
                onKeyPress={props.onKeyPress}
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
                type={props.type}
            ></input>
        </div>
    );
};

export default InputArea;
