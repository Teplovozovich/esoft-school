import React, { useState, useEffect } from 'react';
import './Game.css';
import ModalWindow from '../ModalWindow/ModalWindow';

const Game = (props) => {
    const [turn, setTurn] = useState('X');
    const [board, setBoard] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [playerX, setPlayerX] = useState({
        name: 'Плюшкина',
        surname: 'Екатерина'
    });

    const [playerO, setPlayerO] = useState({
        name: 'Пупкин',
        surname: 'Владелен'
    });

    const [resetBoard, setResetBoard] = useState(false);


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
                setShowModal(true);
                return;
            }
        }

        if (!board.includes('')) {
            setWinner('Ничья');
            setShowModal(true);
            return;
        }
    }


    function handleResetBoard() {
        setTurn(winner === 'X' ? 'O' : 'X'); // Start with the opposite player if there is a winner
        setBoard(Array(9).fill(''));
        setWinner(null);
        setPlayerX(prevState => ({
            ...prevState,
            name: prevState.surname,
            surname: prevState.name
        }));
        setPlayerO(prevState => ({
            ...prevState,
            name: prevState.surname,
            surname: prevState.name
        }));
    }

    let modalWindow = null;
    let gameStep = null;

    if (winner) {
        let textPageTitle = '';
        if (winner === 'X') {
            textPageTitle = `${playerO.name} ${playerO.surname} победил!`;
        } else if (winner === 'O') {
            textPageTitle = `${playerX.name} ${playerX.surname} Победила!`;
        } else {
            textPageTitle = `Ничья!`;
        }

        modalWindow = (
            <ModalWindow secondButtonClickHandler={() => { console.log("aboba"); }} onClick={handleResetBoard} textPageTitle={textPageTitle} />
        );

        gameStep = (
            <div id="game-step">
                <p>Ходит</p>
                &nbsp;
                <img
                    id="imgCurrentPlayer"
                    src={turn === 'X' ? '../assets/svg/x.svg' : '../assets/svg/zero.svg'}
                />
                &nbsp;
                <p>{turn === 'X' ? `${playerO.name} ${playerO.surname}` : `${playerX.name} ${playerX.surname}`}</p>
            </div>
        );
    } else {
        gameStep = (
            <div id="game-step">
                <p>Ходит</p>
                &nbsp;
                <img
                    id="imgCurrentPlayer"
                    src={turn === 'X' ? '../assets/svg/x.svg' : '../assets/svg/zero.svg'}
                />
                &nbsp;
                <p>{turn === 'X' ? `${playerO.name} ${playerO.surname}` : `${playerX.name} ${playerX.surname}`}</p>
            </div>
        );
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
                            src={
                                cell === 'X'
                                    ? '../assets/svg/xxl-x.svg'
                                    : cell === 'O'
                                        ? '../assets/svg/xxl-zero.svg'
                                        : ''
                            }
                        />
                    </div>
                ))}
            </div>
            {modalWindow}
            {gameStep}
        </div>
    );
};

export default Game;