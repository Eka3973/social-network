import React from 'react';
import PropTypes from "prop-types";

const AddMessageButton = ({addMessageItem}) => {
    return (
        <div>
            <button type='button' onClick={addMessageItem}>Send Reply</button>
        </div>
    )

};

export default AddMessageButton;

AddMessageButton.propTypes = {
    addMessage: PropTypes.func.isRequired
};