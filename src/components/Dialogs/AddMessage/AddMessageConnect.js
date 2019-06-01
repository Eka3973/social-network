import {addMessage} from "../../../Redux/DialogsReducer";
import AddMessageContainer from "./AddMessageContainer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        placeholderMessage: state.dialogsPage.placeholderMessage,
    }
};

const ConnectedAddMessage = connect(mapStateToProps, {addMessage})(AddMessageContainer);
export default ConnectedAddMessage;