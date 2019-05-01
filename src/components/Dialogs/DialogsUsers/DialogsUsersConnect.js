import DialogsUsers from "./DialogsUsers";
import {connect} from "react-redux";

const  mapStateToProps = (state) => {
    return {
        dialogsUsers: state.dialogsPage.dialogsUsers
    }
};
const ConnectedDialogsUsers = connect(mapStateToProps)(DialogsUsers);
export  default ConnectedDialogsUsers;