import DialogsUsers from "./DialogsUsers";
import {connect} from "react-redux";

const  mapStateToProps = (state: any) => {
    return {
        dialogsUsers: state.dialogsPage.dialogsUsers,
        users: state.usersPage.users,
        iconUserSrc: state.usersPage.iconUserSrc,
        altImg: state.usersPage.altImg
    }
};
const ConnectedDialogsUsers = connect(mapStateToProps)(DialogsUsers);
export  default ConnectedDialogsUsers;