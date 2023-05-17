import React from 'react'

import projectStyles from './style.module.css'
import styles from './ActivePlayersTab.module.css'
import './frame2.css'

const ActivePlayersTab = (props) => {
    return (
        <div className="frame2-container">
            <div className="frame2-frame">
                <div className="frame2-header">
                    <div className="frame2-logo">
                        <img
                            alt="ExcludeI132"
                            src="/playground_assets/excludei132-61gi.svg"
                            className="frame2-exclude"
                        />
                    </div>
                    <div className="frame2-links">
                        <div className="frame2-tab">
                            <span className="frame2-text Body16pxmedium">
                                <span>Игровое поле</span>
                            </span>
                        </div>
                        <div className="frame2-tab1">
                            <span className="frame2-text02 Body16pxmedium">
                                <span>Рейтинг</span>
                            </span>
                        </div>
                        <div className="frame2-tab2">
                            <span className="frame2-text04 Body16pxmedium">
                                <span>Активные игроки</span>
                            </span>
                        </div>
                        <div className="frame2-tab3">
                            <span className="frame2-text06 Body16pxmedium">
                                <span>История игр</span>
                            </span>
                        </div>
                        <div className="frame2-tab4">
                            <span className="frame2-text08 Body16pxmedium">
                                <span>Список игроков</span>
                            </span>
                        </div>
                    </div>
                    <button className="frame2-iconbutton">
                        <img
                            alt="SVGExittoappI132"
                            src="/playground_assets/svgexittoappi132-y76e.svg"
                            className="frame2-sv-exittoapp"
                        />
                    </button>
                </div>
                <div className="frame2-body">
                    <div className="frame2-header1">
                        <span className="frame2-text10 HeadersH1–bold">
                            <span>Активные игроки</span>
                        </span>
                        <div className="frame2-switchtogglenonactive">
                            <span className="frame2-text12 Body16pxregular">
                                <span>Только свободные</span>
                            </span>
                            <img
                                alt="Switchtoggle1326"
                                src="/playground_assets/switchtoggle1326-xpq.svg"
                                className="frame2-switchtoggle"
                            />
                        </div>
                    </div>
                    <div className="frame2-list">
                        <div className="frame2-row">
                            <span className="frame2-text14 Body16pxregular">
                                <span>Александров Игнат Анатолиевич</span>
                            </span>
                            <div className="frame2-right">
                                <div className="frame2-statuscell">
                                    <div className="frame2-status-m">
                                        <span className="frame2-text16 Body16pxregular">
                                            <span>Свободен</span>
                                        </span>
                                    </div>
                                </div>
                                <button className="frame2-primarybutton">
                                    <span className="frame2-text18 Body16pxmedium">
                                        <span>Позвать играть</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="frame2-row01">
                            <span className="frame2-text20 Body16pxregular">
                                <span>Василенко Эрик Платонович</span>
                            </span>
                            <div className="frame2-right01">
                                <div className="frame2-statuscell01">
                                    <div className="frame2-status-m01">
                                        <span className="frame2-text22 Body16pxregular">
                                            <span>В игре</span>
                                        </span>
                                    </div>
                                </div>
                                <button className="frame2-secondarybutton">
                                    <span className="frame2-text24 Body16pxmedium">
                                        <span>Позвать играть</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="frame2-row02">
                            <span className="frame2-text26 Body16pxregular">
                                <span>Быков Юрий Виталиевич</span>
                            </span>
                            <div className="frame2-right02">
                                <div className="frame2-statuscell02">
                                    <div className="frame2-status-m02">
                                        <span className="frame2-text28 Body16pxregular">
                                            <span>Свободен</span>
                                        </span>
                                    </div>
                                </div>
                                <button className="frame2-primarybutton1">
                                    <span className="frame2-text30 Body16pxmedium">
                                        <span>Позвать играть</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="frame2-row03">
                            <span className="frame2-text32 Body16pxregular">
                                <span>Галкин Феликс Платонович</span>
                            </span>
                            <div className="frame2-right03">
                                <div className="frame2-statuscell03">
                                    <div className="frame2-status-m03">
                                        <span className="frame2-text34 Body16pxregular">
                                            <span>В игре</span>
                                        </span>
                                    </div>
                                </div>
                                <button className="frame2-secondarybutton1">
                                    <span className="frame2-text36 Body16pxmedium">
                                        <span>Позвать играть</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="frame2-row04">
                            <span className="frame2-text38 Body16pxregular">
                                <span>Комаров Цефас Александрович</span>
                            </span>
                            <div className="frame2-right04">
                                <div className="frame2-statuscell04">
                                    <div className="frame2-status-m04">
                                        <span className="frame2-text40 Body16pxregular">
                                            <span>В игре</span>
                                        </span>
                                    </div>
                                </div>
                                <button className="frame2-secondarybutton2">
                                    <span className="frame2-text42 Body16pxmedium">
                                        <span>Позвать играть</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="frame2-row05">
                            <span className="frame2-text44 Body16pxregular">
                                <span>Шевченко Рафаил Михайлович</span>
                            </span>
                            <div className="frame2-right05">
                                <div className="frame2-statuscell05">
                                    <div className="frame2-status-m05">
                                        <span className="frame2-text46 Body16pxregular">
                                            <span>В игре</span>
                                        </span>
                                    </div>
                                </div>
                                <button className="frame2-secondarybutton3">
                                    <span className="frame2-text48 Body16pxmedium">
                                        <span>Позвать играть</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="frame2-row06">
                            <span className="frame2-text50 Body16pxregular">
                                <span>Гордеев Шамиль Леонидович</span>
                            </span>
                            <div className="frame2-right06">
                                <div className="frame2-statuscell06">
                                    <div className="frame2-status-m06">
                                        <span className="frame2-text52 Body16pxregular">
                                            <span>Свободен</span>
                                        </span>
                                    </div>
                                </div>
                                <button className="frame2-primarybutton2">
                                    <span className="frame2-text54 Body16pxmedium">
                                        <span>Позвать играть</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="frame2-row07">
                            <span className="frame2-text56 Body16pxregular">
                                <span>Бобров Фёдор Викторович</span>
                            </span>
                            <div className="frame2-right07">
                                <div className="frame2-statuscell07">
                                    <div className="frame2-status-m07">
                                        <span className="frame2-text58 Body16pxregular">
                                            <span>Свободен</span>
                                        </span>
                                    </div>
                                </div>
                                <button className="frame2-primarybutton3">
                                    <span className="frame2-text60 Body16pxmedium">
                                        <span>Позвать играть</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="frame2-row08">
                            <span className="frame2-text62 Body16pxregular">
                                <span>Суворов Феликс Григорьевич</span>
                            </span>
                            <div className="frame2-right08">
                                <div className="frame2-statuscell08">
                                    <div className="frame2-status-m08">
                                        <span className="frame2-text64 Body16pxregular">
                                            <span>В игре</span>
                                        </span>
                                    </div>
                                </div>
                                <button className="frame2-secondarybutton4">
                                    <span className="frame2-text66 Body16pxmedium">
                                        <span>Позвать играть</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="frame2-row09">
                            <span className="frame2-text68 Body16pxregular">
                                <span>Марков Йошка Фёдорович</span>
                            </span>
                            <div className="frame2-right09">
                                <div className="frame2-statuscell09">
                                    <div className="frame2-status-m09">
                                        <span className="frame2-text70 Body16pxregular">
                                            <span>Свободен</span>
                                        </span>
                                    </div>
                                </div>
                                <button className="frame2-primarybutton4">
                                    <span className="frame2-text72 Body16pxmedium">
                                        <span>Позвать играть</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivePlayersTab
