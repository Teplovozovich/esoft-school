import React, { useState, useEffect } from 'react';
import './Game.css';

const Game = (props) => {
    const [turn, setTurn] = useState('X');
    const [board, setBoard] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        checkWinner();
    }, [board]);

    function handleCellClick(index) {
        // Если ячейка уже заполнена или есть победитель, ничего не делаем
        if (board[index] || winner) {
            return;
        }

        // Обновляем состояние доски и текущего хода
        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard);
        setTurn(turn === 'X' ? 'O' : 'X');
    }

    function checkWinner() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setWinner(board[a]);
                break;
            }
        }
    }

    return (
        <div id="game-container">
            <div id="game-time">05:12</div>
            <div id="game-board">
                {board.map((cell, index) => (
                    <div
                        key={index}
                        className="cell"
                        pos={index + 1}
                        onClick={() => handleCellClick(index)}
                    >
                        <img
                            id={`theImg${index + 1}`}
                            src={cell === 'X' ? '../assets/svg/xxl-x.svg' : (cell === 'O' ? '../assets/svg/xxl-zero.svg' : '')}
                        />
                    </div>
                ))}
            </div>
            <div id="game-step">
                {winner ? (
                    <>
                        <p>Победитель: {winner}</p>
                        <button onClick={() => window.location.reload()}>Начать заново</button>
                    </>
                ) : (
                    <>
                        <p>Ходит </p>
                        <img id="imgCurrentPlayer" src={turn === 'X' ? '../assets/svg/x.svg' : '../assets/svg/zero.svg'} />
                    </>
                )}
            </div>
        </div>
    );
};

export default Game;