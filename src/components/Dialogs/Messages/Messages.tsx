import React from 'react';
import style from './Messages.module.scss';

interface IProps {
    messages: any[],

}

const Messages = ({messages}: IProps) => {
    const messageItem = messages.map((elem: any) =>
        <div key={elem.id} className={style.messageItem}>
            <div className={style.messageAvatar}>
                <img src={elem.userImg} alt={elem.userAlt}/>
            </div>
            <div>{elem.userMessage}</div>
        </div>
    );

    return (
        <div className={style.messageWrapper}>
            {messageItem}
        </div>
    )
};
export default Messages;

