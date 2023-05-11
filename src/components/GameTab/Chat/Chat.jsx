import React from 'react'
import './Chat.css'

const Chat = (props) => {
    return (
        <div id="chat-container">
            <div class="msgs-container">
                <div class="msg-container other">
                    <div class="msg-header">
                        <div class="subject-name x">Плюшкина Екатерина</div>
                        <div class="time">13:40</div>
                    </div>
                    <div class="msg-body">Ну что, готовься к поражению!!1</div>
                </div>
                <div class="msg-container me">
                    <div class="msg-header">
                        <div class="subject-name zero">Пупкин Владлен</div>
                        <div class="time">13:41</div>
                    </div>
                    <div class="msg-body">Надо было играть за крестики. Розовый — мой не самый счастливый цвет</div>
                </div>
                <div class="msg-container me">
                    <div class="msg-header">
                        <div class="subject-name zero">Пупкин Владлен</div>
                        <div class="time">13:45</div>
                    </div>
                    <div class="msg-body">Я туплю...</div>
                </div>
                <div class="msg-container other">
                    <div class="msg-header">
                        <div class="subject-name x">Плюшкина Екатерина</div>
                        <div class="time">13:47</div>
                    </div>
                    <div class="msg-body">Отойду пока кофе попить, напиши в тг как сходишь</div>
                </div>
            </div>
            <div class="msg-interactive-elements">
                <textarea placeholder="Сообщение..."></textarea>
                <button><img src="../assets/svg/send-btn.svg"></img></button>
            </div>
        </div>

    )
}

export default Chat;