import React from 'react';
import s from './UserLockStatus.module.css'

const UserLockStatus = (props) => {
    return (

        <div>
            <div className={`${s[props.className]}`}><p className={s.labelInButton}>{`${props.textLabel}`}</p></div>
        </div>
    );
}

export default UserLockStatus;