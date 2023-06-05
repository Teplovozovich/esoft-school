import React from 'react';
import s from './ItemPlayersListTab.module.css';
import GameStatus from '../../Common/Labels/GameStatus/GameStatus';
import CallPlayerButton from '../../Common/CallPlayerButton/CallPlayerButton';
import UserLockStatus from '../../Common/Labels/UserLockStatus/UserLockStatus';
import ButtonBlock from '../../Common/ButtonBlock/ButtonBlock';

const ItemPlayersListTab = ({ props, items, onStatusChange }) => {
    return (
        <div>
            {items.map((item) => (
                <div className={s.row} key={item.id}>
                    <div className={s.firstCell}>
                        <p className={s.rowCell}>{item.name}</p>
                    </div>
                    <div className={s.secondCell}>
                        <p className={s.rowCell}>{item.age}</p>
                    </div>
                    <div className={s.thirdCell}>
                        <p className={s.rowCell}>
                            <img src="../assets/svg/girl.svg" alt="girl" />
                        </p>
                    </div>
                    <div className={s.fourthCell}>
                        <p className={s.rowCell}>
                            <UserLockStatus
                                className={
                                    item.status === 'blocked' ? 'secondaryButton' : 'primaryButton'
                                }
                                textLabel={item.status === 'blocked' ? 'Заблокирован' : 'Активен'}
                            />
                        </p>
                    </div>
                    <div className={s.fifthCell}>
                        <p className={s.rowCell}>{item.created}</p>
                    </div>
                    <div className={s.sixthCell}>
                        <p className={s.rowCell}>{item.changed}</p>
                    </div>
                    <div className={s.seventhCell}>
                        <p className={s.rowCell}>
                            <ButtonBlock
                                className="button"
                                isBlocked={item.isBlocked}
                                onStatusChange={() => onStatusChange(item.id)}
                            />
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemPlayersListTab;
