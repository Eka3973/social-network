import DialogsUsers from "./DialogsUsers";
import {connect} from "react-redux";
import {AppState} from "../../../Redux/Redux-store";

const mapStateToProps = (state: AppState) => {
    return {
        users: state.usersPage.users,
        iconUserSrc: state.usersPage.iconUserSrc,
        altImg: state.usersPage.altImg
    }
};
const ConnectedDialogsUsers = connect(mapStateToProps)(DialogsUsers);
export default ConnectedDialogsUsers;