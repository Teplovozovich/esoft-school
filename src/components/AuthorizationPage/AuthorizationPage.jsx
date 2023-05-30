import React, { useState } from 'react'

import s from './AuthorizationPage.module.css'
import PageTitle from '../Common/PageTitle/PageTitle.jsx'

const AuthorizationPage = (props) => {
    return (
        <div className={s.mainContainer}>
            <div className={s.form}>
                <div><img className={s.dog} src="./../../../public/assets/svg/dog.svg" /></div>
                <h1 className={s.enter_in_game}>Войдите в игру</h1>
                <div className={s.input_form}>
                    <input id={s.loginInput} className={s.input} name="login" type="text" placeholder="Логин" />
                </div>
                <div className={s.input_form}>
                    <input id="passwordInput" className={s.input} name="password" type="password" placeholder="Пароль" />
                </div>
                <div className={s.input_form}>
                    <button type="submit" className={s.enter_button}>Войти</button>
                </div>
            </div>
        </div >
    )
}

export default AuthorizationPage
