import React from 'react';
import s from './ButtonBlock.module.css';

const ButtonBlock = (props) => {

    return (
        <div>
            <button className={`${s[props.className]} ${s[props.status]}`} onClick={props.onClick}>
                {props.isBlocked === 'unblocked' ? (
                    <>
                        <img src="../assets/svg/vector.svg" alt="Block Icon" />
                        <p className={s.labelInButton}>Заблокировать</p>
                    </>
                ) : (
                    <p className={s.labelInButton}>Разблокировать</p>
                )}
            </button>
        </div>
    );
};

export default ButtonBlock;
