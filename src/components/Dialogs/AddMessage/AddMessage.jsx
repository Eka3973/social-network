import React from 'react';
import style from './AddMessage.module.scss';
import PropTypes from "prop-types";

const AddMessage = ({addMessage, updateMessage, addMyMessage: {myImg, myImgAlt}, placeholderMessage, newMessageText}) => {

    const newMessage = React.createRef();

    const addMessageItem = () => {
        let addedMessage = newMessage.current.value;
        addMessage(addedMessage);
    };
    const onMessageChange = () => {
        let enteredTextMessage = newMessage.current.value;
        updateMessage(enteredTextMessage);
    };

    return (
        <div className={style.messageContent}>
            <textarea onChange={onMessageChange} ref={newMessage} placeholder={placeholderMessage}
                      value={newMessageText}/>
            <button type='button' onClick={addMessageItem}>Send Reply</button>
        </div>
    )
};
export default AddMessage;

AddMessage.propTypes = {
    addMessage: PropTypes.func.isRequired,
    updateMessage: PropTypes.func.isRequired,
    placeholderMessages: PropTypes.string.isRequired,
    newMessageText: PropTypes.string.isRequired,
    addMyMessage: PropTypes.object.isRequired
};