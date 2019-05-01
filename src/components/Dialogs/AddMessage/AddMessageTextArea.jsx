import React from 'react';
import PropTypes from "prop-types";

const AddMessageTextArea = ({onMessageChange, placeholderMessage, value}) => {
    return (
        <div>
            <textarea onChange={onMessageChange} placeholder={placeholderMessage} value={value}/>
        </div>
    )

};

export default AddMessageTextArea;

AddMessageTextArea.propTypes = {
    onMessageChange: PropTypes.func.isRequired,
    placeholderMessages: PropTypes.string.isRequired
};