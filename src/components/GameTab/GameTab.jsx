import React from 'react'
import './GameTab.css'
import Players from './Players/Players';
import Game from './Game/Game';
import Chat from './Chat/Chat';


const GameTab = (props) => {
    return (
        <div>
            <div id="main-container">
                <Players />
                <Game />
                <Chat />
            </div>
        </div>
    )
}

export default GameTab;