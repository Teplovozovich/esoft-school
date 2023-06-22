import React from 'react'
import './Chat.css'
import InputArea from '../../Common/InputArea/InputArea';

const Chat = (props) => {
    return (
        <div id="chat-container">
            <div className="msgs-container">
                <div className="msg-container other">
                    <div className="msg-header">
                        <div className="subject-name x">Плюшкина Екатерина</div>
                        <div className="time">13:40</div>
                    </div>
                    <div className="msg-body">Ну что, готовься к поражению!!1</div>
                </div>
                <div className="msg-container me">
                    <div className="msg-header">
                        <div className="subject-name zero">Пупкин Владлен</div>
                        <div className="time">13:41</div>
                    </div>
                    <div className="msg-body">Надо было играть за крестики. Розовый — мой не самый счастливый цвет</div>
                </div>
                <div className="msg-container me">
                    <div className="msg-header">
                        <div className="subject-name zero">Пупкин Владлен</div>
                        <div className="time">13:45</div>
                    </div>
                    <div className="msg-body">Я туплю...</div>
                </div>
                <div className="msg-container other">
                    <div className="msg-header">
                        <div className="subject-name x">Плюшкина Екатерина</div>
                        <div className="time">13:47</div>
                    </div>
                    <div className="msg-body">Отойду пока кофе попить, напиши в тг как сходишь</div>
                </div>
            </div>
            <div className="msg-interactive-elements">
                <InputArea placeholder="Сообщение..." />
                <button><img src="./assets/svg/send-btn.svg"></img></button>
            </div>
        </div>

    )
}

export default Chat;