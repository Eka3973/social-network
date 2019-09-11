import React from 'react';
import style from './Messages.module.scss';

interface IProps {
    messages: object[]
}

const Messages = ({messages}: IProps) => {
    return (
        <div className={style.messageWrapper}>
            {messages.map((elem: any) =>
                <div key={elem.id} className={style.messageItem}>
                    <div className={style.messageAvatar}>
                        <img src={elem.userImg} alt={elem.userAlt}/>
                    </div>
                    <div>{elem.userMessage}</div>
                </div>
            )}
        </div>
    )
};
export default Messages;

