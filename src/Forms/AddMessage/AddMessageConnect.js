import {addMessage, clearForm} from "../../Redux/DialogsReducer";
import {connect} from "react-redux";
import AddMessage from "./AddMessage";



const ConnectedAddMessage = connect(null, {addMessage, clearForm})(AddMessage);
export default ConnectedAddMessage;