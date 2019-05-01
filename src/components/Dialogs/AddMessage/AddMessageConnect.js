import {addMessageActionCreator} from "../../../Redux/DialogsReducer";
import AddMessageContainer from "./AddMessageContainer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        placeholderMessage: state.dialogsPage.placeholderMessage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage(addedMessage) {
            dispatch(addMessageActionCreator(addedMessage))
        }
    }
};

const ConnectedAddMessage = connect(mapStateToProps, mapDispatchToProps)(AddMessageContainer);
export default ConnectedAddMessage;