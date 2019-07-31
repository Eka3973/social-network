import {connect} from "react-redux";
import HeaderProfile from "./HeaderProfile";
import {logOut, me,} from "../../../../Redux/AuthReducer";
import {AppState} from "../../../../Redux/Redux-store";



const mapStateToProps = (state: AppState) => {
    return {
        fullName: state.profilePage.fullProfile.fullName,
        isAuth: state.auth.isAuth,
        photo: state.profilePage.fullProfile.photo
    }
};

const ConnectedHeaderProfile = connect(mapStateToProps, {me, logOut})(HeaderProfile);
export default ConnectedHeaderProfile;