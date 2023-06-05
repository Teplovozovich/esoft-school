import React from 'react';
import './Switch.css'

const Switch = (props) => {
    return (

        <div className='switch_container'>
            <input onChange={props.onChange} type="checkbox" id="switch"></input>
            <label htmlFor="switch" className="switch-label"></label>
        </div>
    );
}

export default Switch;