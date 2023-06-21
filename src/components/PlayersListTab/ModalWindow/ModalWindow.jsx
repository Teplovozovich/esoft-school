import React, { useState } from 'react';
import s from './ModalWindow.module.css'
import Button from './../../Common/Button/Button'
import PageTitle from './../../Common/PageTitle/PageTitle';
import { NavLink } from 'react-router-dom';
import InputArea from '../../Common/InputArea/InputArea';

const ModalWindow = (props) => {
    const [sex, setSex] = useState('');



    const handleKeyPress = (e) => {
        const allowedChars = "0123456789";
        const char = e.key;
        if (!allowedChars.includes(char)) {
            e.preventDefault();
        }
    }

    const onInputAgeChange = (e) => {
        let newText = e.target.value;
        props.dispatch({ type: "UPDATE-NEW-INPUT-AGE-TEXT", newText: newText });
    };

    const onInputFullNameChange = (e) => {
        let newText = e.target.value;
        props.dispatch({ type: "UPDATE-NEW-INPUT-FULL-NAME-TEXT", newText: newText });
    };

    const onRadioSexChange = (e) => {
        setSex(e.target.value)
        let newValue = e.target.value;
        props.dispatch({ type: "UPDATE-NEW-RADIO-SEX-VALUE", newValue: newValue });
    };

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
                    <InputArea
                        placeholder="Иванов Иван Иванович"
                        onChange={onInputFullNameChange}
                    />
                </div>
                <div className={s.modalWrap}>
                    <div className={s.inputs}>
                        <div className={s.age}>
                            <div className={s.fio}>Возраст</div>
                            <InputArea
                                placeholder="0"
                                onKeyPress={handleKeyPress}
                                onChange={onInputAgeChange}
                            />
                        </div>
                        <div className={s.sex}>
                            <div className={s.sexWrap}>
                                <div className={s.fio}>Пол</div>
                                <div className={s.people}>
                                    <label>
                                        <input
                                            type="radio"
                                            name="option"
                                            value="girl"
                                            checked={sex === "girl"}
                                            onChange={onRadioSexChange}
                                        />
                                        <div className={s.img}>
                                            <img src="../assets/svg/big-girl.svg" alt="boy" />
                                        </div>
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="option"
                                            value="boy"
                                            checked={sex === "boy"}
                                            onChange={onRadioSexChange}
                                        />
                                        <div className={s.img}>
                                            <img src="../assets/svg/big-boy.svg" alt="girl" />
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Button
                    className="primary-button"
                    textButton="Добавить"
                    onClick={() => props.dispatch({ type: "HANDLE-ADD-BUTTON-CLICK" })}
                />
            </div>
        </div>
    );
};

export default ModalWindow;
