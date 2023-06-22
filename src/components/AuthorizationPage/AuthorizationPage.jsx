import React, { useState } from 'react';
import s from './AuthorizationPage.module.css';
import PageTitle from '../Common/PageTitle/PageTitle.jsx';
import InputArea from '../Common/InputArea/InputArea';
import Button from '../Common/Button/Button';
import { useNavigate } from 'react-router-dom';

const AuthorizationPage = (props) => {
    const navigate = useNavigate();
    const [loginText, setLoginText] = useState("");
    const [passwordText, setPasswordText] = useState("");
    const [isLoginWrong, setIsLoginWrong] = useState(false);
    const [isPasswordWrong, setIsPasswordWrong] = useState(false);

    const canSubmit = loginText.length > 0 && passwordText.length > 0;
    const buttonClass = canSubmit ? "primary-button" : "primary-button unavailableButton";

    let allowedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._";

    const handleKeyPress = (e) => {
        const allowedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._";
        const char = e.key;
        if (!allowedChars.includes(char)) {
            e.preventDefault();
        }
    }

    const handleLogin = () => {
        if (loginText === 'aboba' && passwordText === 'aboba') {
            navigate('/ActivePlayersTab');
        } else {
            setIsLoginWrong(loginText !== 'aboba');
            setIsPasswordWrong(passwordText !== 'aboba');
        }
    };

    return (
        <div className={s.mainContainer}>
            <div className={s.form}>
                <div><img className={s.dog} src='./assets/svg/dog.svg' /></div>
                <div className={s.title}>
                    <PageTitle textPageTitle="Войти в игру" />
                </div>
                <div className={s.firstInput}>
                    <InputArea
                        placeholder="Логин"
                        onChange={(e) => setLoginText(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className={isLoginWrong ? "wrongInputDates" : ''}
                        value={loginText}
                    />
                    {isLoginWrong && <p className={s.error}>Неверный логин</p>}
                </div>
                <div className={s.secondInput}>
                    <InputArea
                        placeholder="Пароль"
                        onChange={(e) => setPasswordText(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className={isPasswordWrong ? "wrongInputDates" : ''}
                        value={passwordText}
                        type="password"
                    />
                    {isPasswordWrong && <p className={s.error}>Неверный пароль</p>}
                </div>
                <div className={s.thirdInput}>
                    <Button className={buttonClass} textButton="Войти" onClick={handleLogin} />
                </div>
            </div>
        </div >
    )
};

export default AuthorizationPage;
