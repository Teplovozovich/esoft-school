import React from 'react';
import './Button.css'

const Button = (props) => {

    return (

        <div>
            <button
                className={props.className}
                onClick={props.onClick}
                aut={props.aut}>
                <p className='labelInButton'>{props.textButton}</p>
            </button>
        </div>
    );
}

export default Button;