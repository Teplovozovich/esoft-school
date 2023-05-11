import React from 'react'
import './GameTab.css'
import Players from './Players/Players';
import Game from './Game/Game';
import Chat from './Chat/Chat';


const GameTab = (props) => {
    return (
        <body>
            <div id="main-container">
                <Players />
                <Game />
                <Chat />
            </div>
        </body>
    )
}

export default GameTab;