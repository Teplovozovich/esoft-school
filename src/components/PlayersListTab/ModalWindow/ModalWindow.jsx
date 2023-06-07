import React from 'react';
import s from './ModalWindow.module.css'
import Button from './../../Common/Button/Button'
import PageTitle from './../../Common/PageTitle/PageTitle';
import { NavLink } from 'react-router-dom';
import InputArea from '../../Common/InputArea/InputArea';


const ModalWindow = (props) => {

    const handleKeyPress = (e) => {
        const allowedChars = "0123456789";
        const char = e.key;
        if (!allowedChars.includes(char)) {
            e.preventDefault();
        }
    }

    return (

        <div className={s.ModalBackground}>
            <div className={s.WindowModal}>
                <div className={s.modalWrap}>
                    <div onClick={props.secondButtonClickHandler} className={s.cross} >
                        <img className={s.crossImg} src="../assets/svg/modal-cross.svg" />
                    </div>
                </div>
                <PageTitle textPageTitle={props.textPageTitle} />
                <div className={s.modalWrap}>
                    <div className={s.fio}>ФИО</div>
                    <InputArea placeholder="Иванов Иван Иванович" />
                </div>
                <div className={s.modalWrap}>

                    <div className={s.inputs}>
                        <div className={s.age}>
                            <div className={s.fio}>Возраст</div>
                            <InputArea
                                placeholder="0"
                                onKeyPress={handleKeyPress}
                            />
                        </div>
                        <div className={s.sex}>
                            <div className={s.sexWrap}>
                                <div className={s.fio}>Пол</div>
                                <div className={s.people}>
                                    <label>
                                        <input type="radio" name="option" value="boy" />
                                        <div className={s.img}>
                                            <img src="../assets/svg/big-girl.svg" alt="boy" />
                                        </div>
                                    </label>

                                    <label>
                                        <input type="radio" name="option" value="girl" />
                                        <div className={s.img}>
                                            <img src="../assets/svg/big-boy.svg" alt="girl" />
                                        </div>
                                    </label>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Button className="primary-button" textButton="Добавить" onClick={props.onClick} />
            </div>
        </div>
    );
};

export default ModalWindow;