import React from 'react';
import s from './InputArea.module.css';

const InputArea = (props) => {
    return (
        <div className={s.divArea}>
            <textarea
                className={s[props.className]}
                onKeyPress={props.onKeyPress}
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value} // Add this line to set the value of the textarea
            ></textarea>
        </div>
    );
};

export default InputArea;
