import React from 'react';
import './ModalWindow.css'
import Button from '../../Common/Button/Button.jsx'
import PageTitle from '../../Common/PageTitle/PageTitle.jsx';

const ModalWindow = (props) => {
    return (

        <div className='ModalBackground '>
            < div className='WindowModal' >
                <img src="../assets/svg/cup.svg" alt="" />
                <PageTitle textPageTitle={props.textPageTitle} />

                <Button className="primary-button" textButton="Новая игра" onClick={props.onClick} />
                <Button className="secondary-button" textButton="Выйти в меню" onClick={props.secondButtonClickHandler} />
            </div>
        </div>
    );
};

export default ModalWindow;