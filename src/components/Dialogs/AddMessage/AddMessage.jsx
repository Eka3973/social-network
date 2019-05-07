import React from 'react';
import PropTypes from "prop-types";
import style from './AddMessage.module.scss';

const AddMessage = ({onMessageChange, addMessageItem, placeholderMessage, value}) => {
    return (
        <div className={style.messageContent}>
            <textarea className={style.textarea}
                      onChange={onMessageChange}
                      placeholder={placeholderMessage}
                      value={value}/>
            <button className={style.button}
                    type='button' onClick={addMessageItem}>Send Reply</button>
        </div>
    )

};

export default AddMessage;

AddMessage.propTypes = {
    onMessageChange: PropTypes.func.isRequired,
    placeholderMessages: PropTypes.string.isRequired
};