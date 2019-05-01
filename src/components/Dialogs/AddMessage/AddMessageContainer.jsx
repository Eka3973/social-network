import React from 'react';
import style from './AddMessage.module.scss';
import PropTypes from "prop-types";
import AddMessageTextArea from "./AddMessageTextArea";
import AddMessageButton from "./AddMessageButton";

class AddMessageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.onMessageChange = this.onMessageChange.bind(this);
        this.addMessageItem = this.addMessageItem.bind(this);
    }

    onMessageChange = (e) => {
        this.setState({value: e.target.value});
    };
    addMessageItem = (e) => {
        this.props.addMessage(this.state.value);
        this.setState({value: ''});
        e.preventDefault();
    };


    render() {
        return (
            <div className={style.messageContent}>
                <AddMessageTextArea {...this.props} onMessageChange={this.onMessageChange} value={this.state.value}/>
                <AddMessageButton {...this.props} addMessageItem={this.addMessageItem}/>
            </div>
        )
    }
}

export default AddMessageContainer;

AddMessageContainer.propTypes = {
    addMessage: PropTypes.func.isRequired,
    placeholderMessages: PropTypes.string.isRequired
};