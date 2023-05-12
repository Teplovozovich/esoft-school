import React from 'react'
import './Players.css'
import PlayersItems from '../PlayersItems/PlayersItems';
import PageTitle from '../../common/PageTitle/PageTitle';

const Players = (props) => {
    return (
        <div>
            <div id="subject-list">
                <PageTitle textPageTitle="Игроки" />
                <div className="container">
                    <PlayersItems name="Пупкин Владелен Игоревич" winsPersent="63% побед" src="../assets/svg/zero.svg" />
                    <PlayersItems name="Плюшкина Екатерина Викторовна" winsPersent="23% побед" src="../assets/svg/x.svg" />
                </div>
            </div>
        </div>
    )
}

export default Players;