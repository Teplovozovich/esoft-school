import React from 'react';
import s from './InputArea.module.css';

const InputArea = React.forwardRef((props, ref) => {
    return (
        <div className={s.divArea}>
            <input
                className={s[props.className]}
                onKeyPress={props.onKeyPress}
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
                type={props.type}
                ref={ref} // передаем полученный объект Ref напрямую
            ></input>
        </div>
    );
});

export default InputArea;
