import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../Redux/DialogsReducer";
import AddMessage from "./AddMessage";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        addMyMessage: state.dialogsPage.addMyMessage,
        placeholderMessage: state.dialogsPage.placeholderMessage,
        newMessageText: state.dialogsPage.newMessageText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage(addedMessage) {
            dispatch(addMessageActionCreator(addedMessage))
        },
        updateMessage(enteredTextMessage) {
            dispatch(updateNewMessageActionCreator(enteredTextMessage))
        }
    }
};

const ConnectedAddMessage = connect(mapStateToProps, mapDispatchToProps)(AddMessage);
export default ConnectedAddMessage;