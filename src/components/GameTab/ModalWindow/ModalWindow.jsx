import React from 'react';
import './ModalWindow.css'
import Button from './../../Common/Button/Button'
import PageTitle from './../../Common/PageTitle/PageTitle';
import { NavLink } from 'react-router-dom';


const ModalWindow = (props) => {
    return (

        <div className='ModalBackground '>
            < div className='WindowModal' >
                <img src="../assets/svg/cup.svg" alt="" />
                <PageTitle textPageTitle={props.textPageTitle} />

                <Button className="primary-button" textButton="Новая игра" onClick={props.onClick} />

                <NavLink to="/ActivePlayersTab">
                    <Button className="secondary-button" textButton="Выйти в меню" onClick={props.secondButtonClickHandler} />
                </NavLink>            </div>
        </div>
    );
};

export default ModalWindow;