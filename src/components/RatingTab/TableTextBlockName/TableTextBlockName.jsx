import React from 'react';
import s from './TableTextBlockName.module.css'

const TableTextBlockName = (props) => {
    return (
        <div key={props.key} className={`${s.block_text} ${s.longCell}`}>
            {props.fullName}
        </div>
    );
}


export default TableTextBlockName;
