import React, { useState } from 'react';
import s from './ModalWindow.module.css'
import Button from './../../Common/Button/Button'
import PageTitle from './../../Common/PageTitle/PageTitle';
import { NavLink } from 'react-router-dom';
import InputArea from '../../Common/InputArea/InputArea';

const ModalWindow = (props) => {
    const [sex, setSex] = useState('');

    let newInputAgeElement = React.createRef();
    let newInputFullNameElement = React.createRef();

    const handleKeyPress = (e) => {
        const allowedChars = "0123456789";
        const char = e.key;
        if (!allowedChars.includes(char)) {
            e.preventDefault();
        }
    }

    const onInputAgeChange = () => {
        let newText = newInputAgeElement.current.value;
        props.dispatch({ type: "UPDATE-NEW-INPUT-AGE-TEXT", newText: newText });
        console.log(props.dispatch);
    };

    const onInputFullNameChange = () => {
        let newText = newInputFullNameElement.current.value;
        props.dispatch({ type: "UPDATE-NEW-INPUT-AGE-TEXT", newText: newText });
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
                        ref={newInputFullNameElement}
                        onChange={onInputFullNameChange}
                    />
                </div>
                <div className={s.modalWrap}>
                    <div className={s.inputs}>
                        <div className={s.age}>
                            <div className={s.fio}>Возраст</div>
                            <InputArea
                                placeholder="0"
                                ref={newInputAgeElement}
                                onKeyPress={handleKeyPress}
                                onChange={onInputAgeChange}
                            />
                        </div>
                        <div className={s.sex}>
                            <div className={s.sexWrap}>
                                <div className={s.fio}>Пол</div>
                                <div className={s.people}>
                                    <label>
                                        <input type="radio" name="option" value="girl" onChange={(e) => setSex(e.target.value)} />
                                        <div className={s.img}>
                                            <img src="../assets/svg/big-girl.svg" alt="boy" />
                                        </div>
                                    </label>
                                    <label>
                                        <input type="radio" name="option" value="boy" onChange={(e) => setSex(e.target.value)} />
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
