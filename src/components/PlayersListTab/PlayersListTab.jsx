import React, { useState } from 'react'
import s from './PlayersListTab.module.css'
import PageTitle from '../Common/PageTitle/PageTitle.jsx'
import ItemPlayersListTab from './ItemPlayersListTab/ItemPlayersListTab'
import CallPlayerButton from './../Common/CallPlayerButton/CallPlayerButton'
import ModalWindow from './ModalWindow/ModalWindow'

const PlayersListTab = (props) => {
    const [showModal, setShowModal] = useState(false)

    const handleAddPlayerButtonClick = () => {
        setShowModal(true)
    }

    const handleModalSecondButtonClick = () => {
        setShowModal(false)
    }

    return (
        <div className={s.mainContainer}>
            <div className={s.table__wrap}>
                <div className={s.PlayersListTitle}>
                    <div className={s.title}>
                        <PageTitle textPageTitle="Список игроков" />
                    </div>
                    <div className={s.button}>
                        <CallPlayerButton
                            className="primaryButton"
                            id="addPlayer"
                            textButton="Добавить игрока"
                            onClick={handleAddPlayerButtonClick}
                        />
                    </div>
                </div>
            </div>
            <div className={s.table__wrap}>
                <div className={s.table}>
                    <div className={s.thead}>
                        <div className={s.firstCell}>
                            <p className={s.theadCell}>ФИО</p>
                        </div>
                        <div className={s.secondCell}>
                            <p className={s.theadCell}>Возраст</p>
                        </div>
                        <div className={s.thirdCell}>
                            <p className={s.theadCell}>Пол</p>
                        </div>
                        <div className={s.fourthCell}>
                            <p className={s.theadCell}>Статус</p>
                        </div>
                        <div className={s.fifthCell}>
                            <p className={s.theadCell}>Создан</p>
                        </div>
                        <div className={s.sixthCell}>
                            <p className={s.theadCell}>Изменен</p>
                        </div>
                        <div className={s.seventhCell}>
                            <p className={s.theadCell}></p>
                        </div>
                    </div>
                    <div className={s.table__wrap}>
                        <ItemPlayersListTab
                            items={props.state}
                            handleStatusChange={props.handleStatusChange}
                        />
                    </div>
                </div>
            </div>
            {showModal && (
                <ModalWindow
                    handleAddButtonClick={props.handleAddButtonClick}
                    textPageTitle="Добавьте игрока"
                    onClick={props.handleAddButtonClick}
                    secondButtonClickHandler={handleModalSecondButtonClick}
                />
            )}
        </div>
    )
}

export default PlayersListTab
