import React from 'react';
import './Switch.css'

const Switch = (props) => {
    return (

        <div className='switch_container'>
            <input type="checkbox" id="switch"></input>
            <label for="switch" class="switch-label"></label>
        </div>
    );
}

export default Switch;