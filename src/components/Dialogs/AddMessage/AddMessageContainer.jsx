import React from 'react';
import PropTypes from "prop-types";
import AddMessage from "./AddMessage";

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
            <div>
                <AddMessage
                            {...this.props}
                            onMessageChange={this.onMessageChange}
                            addMessageItem={this.addMessageItem}
                            value={this.state.value}/>

            </div>
        )
    }
}

export default AddMessageContainer;

AddMessageContainer.propTypes = {
    addMessage: PropTypes.func.isRequired,
    placeholderMessages: PropTypes.string.isRequired
};