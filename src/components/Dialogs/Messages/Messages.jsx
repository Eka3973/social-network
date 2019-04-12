import React from 'react';
import style from './Messages.module.scss';
import PropTypes from "prop-types";


const Messages = ({messages}) => {
    const messageItem = messages.map((elem) =>
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

Messages.propTypes = {
    message: PropTypes.array.isRequired

};