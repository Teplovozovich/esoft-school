import React from 'react'
import './Game.css'

const Game = (props) => {
    return (
        <div id="game-container">
            <div id="game-time">05:12</div>
            <div id="game-board">
                <div id="cell1" className="cell" pos="1"><img id="theImg1" src="" /></div>
                <div id="cell2" className="cell" pos="2"><img id="theImg2" src="" /></div>
                <div id="cell3" className="cell" pos="3"><img id="theImg3" src="" /></div>
                <div id="cell4" className="cell" pos="4"><img id="theImg4" src="" /></div>
                <div id="cell5" className="cell" pos="5"><img id="theImg5" src="" /></div>
                <div id="cell6" className="cell" pos="6"><img id="theImg6" src="" /></div>
                <div id="cell7" className="cell" pos="7"><img id="theImg7" src="" /></div>
                <div id="cell8" className="cell" pos="8"><img id="theImg8" src="" /></div>
                <div id="cell9" className="cell" pos="9"><img id="theImg9" src="" /></div>
            </div>
            <div id="game-step"><p>Ходит</p>&nbsp;<img id="imgCurrentPlayer" src="" />&nbsp;<p id="currentPlayerName"></p></div>
        </div>
    )
}

export default Game;