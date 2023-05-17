import React from 'react';
import s from './TableTextBlockName.module.css'

const TableTextBlockName = (props) => {
    return (
        <div className={s.block_text}>
            {props.fullName}
        </div>
    );
}

export default TableTextBlockName;
