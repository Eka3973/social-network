import Messages from "./Messages";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages
    }
};
const ConnectedMessage = connect(mapStateToProps)(Messages);
export default ConnectedMessage;
