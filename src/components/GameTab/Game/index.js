var cell = document.getElementsByClassName('cell');
var currentPlayer = document.getElementById('game-step');
var urlXxl0 = '../assets/svg/xxl-zero.svg';
var urlXxlX = '../assets/svg/xxl-x.svg';
var urlX = '../assets/svg/x.svg';
var url0 = '../assets/svg/zero.svg';
document.getElementById('imgCurrentPlayer').style.width = "24px";
document.getElementById('imgCurrentPlayer').style.height = "24px";

currentMicroPlayer = urlX;
pageNamePlayer = "Плюшкина Екатерина";
document.getElementById('currentPlayerName').innerHTML = pageNamePlayer;

document.getElementById('imgCurrentPlayer').setAttribute('src', currentMicroPlayer)

var allMoves = 9;

var player = urlXxlX;

for (var i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', cellClick, false);
}

function cellClick() {
    var childCell = this.firstElementChild;
    currentPlayer.append('')

    if (this.hasAttribute('isClicked') !== true) {
        childCell.setAttribute('src', player);
        this.setAttribute('isClicked', true);
    } else {
        console.log("Ячейка занята");
        return;
    }


    if (player === urlXxl0) {
        player = urlXxlX;
        currentMicroPlayer = urlX;
        this.setAttribute('pos', "0");
        pageNamePlayer = "Плюшкина Екатерина"
    } else {
        player = urlXxl0;
        currentMicroPlayer = url0;
        this.setAttribute('pos', "X");
        pageNamePlayer = "Пупкин Владелен"
    }

    document.getElementById('imgCurrentPlayer').setAttribute('src', currentMicroPlayer)
    document.getElementById('currentPlayerName').innerHTML = pageNamePlayer;
    allMoves = allMoves - 1;
    checkWin();
}


function checkWin() {
    if (cell[0].getAttribute('pos') === "X" && cell[1].getAttribute('pos') === "X" && cell[2].getAttribute('pos') === "X" ||
        cell[3].getAttribute('pos') === "X" && cell[4].getAttribute('pos') === "X" && cell[5].getAttribute('pos') === "X" ||
        cell[6].getAttribute('pos') === "X" && cell[7].getAttribute('pos') === "X" && cell[8].getAttribute('pos') === "X" ||

        cell[0].getAttribute('pos') === "X" && cell[3].getAttribute('pos') === "X" && cell[6].getAttribute('pos') === "X" ||
        cell[1].getAttribute('pos') === "X" && cell[4].getAttribute('pos') === "X" && cell[7].getAttribute('pos') === "X" ||
        cell[2].getAttribute('pos') === "X" && cell[5].getAttribute('pos') === "X" && cell[8].getAttribute('pos') === "X" ||

        cell[0].getAttribute('pos') === "X" && cell[4].getAttribute('pos') === "X" && cell[8].getAttribute('pos') === "X" ||
        cell[2].getAttribute('pos') === "X" && cell[4].getAttribute('pos') === "X" && cell[6].getAttribute('pos') === "X") {
        alert("Победил X");
        window.location.reload();
    } else if (
        cell[0].getAttribute('pos') === "0" && cell[1].getAttribute('pos') === "0" && cell[2].getAttribute('pos') === "0" ||
        cell[3].getAttribute('pos') === "0" && cell[4].getAttribute('pos') === "0" && cell[5].getAttribute('pos') === "0" ||
        cell[6].getAttribute('pos') === "0" && cell[7].getAttribute('pos') === "0" && cell[8].getAttribute('pos') === "0" ||

        cell[0].getAttribute('pos') === "0" && cell[3].getAttribute('pos') === "0" && cell[6].getAttribute('pos') === "0" ||
        cell[1].getAttribute('pos') === "0" && cell[4].getAttribute('pos') === "0" && cell[7].getAttribute('pos') === "0" ||
        cell[2].getAttribute('pos') === "0" && cell[5].getAttribute('pos') === "0" && cell[8].getAttribute('pos') === "0" ||

        cell[0].getAttribute('pos') === "0" && cell[4].getAttribute('pos') === "0" && cell[8].getAttribute('pos') === "0" ||
        cell[2].getAttribute('pos') === "0" && cell[4].getAttribute('pos') === "0" && cell[6].getAttribute('pos') === "0") {
        alert("Победил 0");
        window.location.reload();
    } else if (allMoves === 0) {
        alert("Ничья");
        window.location.reload();
    }
}
