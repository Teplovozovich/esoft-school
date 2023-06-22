import React from 'react';
import s from './ItemPlayersListTab.module.css';
import GameStatus from '../../Common/Labels/GameStatus/GameStatus';
import CallPlayerButton from '../../Common/CallPlayerButton/CallPlayerButton';
import UserLockStatus from '../../Common/Labels/UserLockStatus/UserLockStatus';
import ButtonBlock from '../../Common/ButtonBlock/ButtonBlock';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ItemPlayersListTab = (props) => {
    const { items } = props;

    return (
        <div>
            <TransitionGroup>
                {items.map((item) => (
                    <CSSTransition key={item.id} timeout={500} classNames={s.fade}>
                        <div className={s.row}>
                            <div className={s.firstCell}>
                                <div className={s.rowCell}>{item.name}</div>
                            </div>
                            <div className={s.secondCell}>
                                <div className={s.rowCell}>{item.age}</div>
                            </div>
                            <div className={s.thirdCell}>
                                <div className={s.rowCell}>
                                    <img src={item.sex === "boy" ? "./assets/svg/boy.svg" : "./assets/svg/girl.svg"} alt="girl" />
                                </div>
                            </div>
                            <div className={s.fourthCell}>
                                <div className={s.rowCell}>
                                    <UserLockStatus
                                        className={
                                            item.status === 'blocked' ? 'secondaryButton' : 'primaryButton'
                                        }
                                        textLabel={item.status === 'blocked' ? 'Заблокирован' : 'Активен'}
                                    />
                                </div>
                            </div>
                            <div className={s.fifthCell}>
                                <div className={s.rowCell}>{item.created}</div>
                            </div>
                            <div className={s.sixthCell}>
                                <div className={s.rowCell}>{item.changed}</div>
                            </div>
                            <div className={s.seventhCell}>
                                <div className={s.rowCell}>
                                    <ButtonBlock
                                        className="button"
                                        isBlocked={item.isBlocked}
                                        onClick={() => props.dispatch({ type: "HANDLE-STATUS-CHANGE", id: item.id })}
                                    />
                                </div>
                            </div>
                        </div>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
};

export default ItemPlayersListTab;
