import React from 'react'
import './PlayersItems.css'


const PlayersItems = (props) => {
    return (
        <div>
            <div className="container">
                <div className="subject-container">
                    <div><img className="subject-icon"
                        src={props.src} /></div>
                    <div className="subject-info">
                        <div className="subject-name" id="subject-name-zero">{props.name}</div>
                        <div className="subject-percent">{props.winsPersent}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayersItems;