import Messages from "./Messages";
import {connect} from "react-redux";
import {AppState} from "../../../Redux/Redux-store";

const mapStateToProps = (state: AppState) => {
    return {
        messages: state.dialogsPage.messages
    }
};
const ConnectedMessage = connect(mapStateToProps)(Messages);
export default ConnectedMessage;
