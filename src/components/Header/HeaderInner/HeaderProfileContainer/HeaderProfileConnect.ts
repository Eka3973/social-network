import {connect} from "react-redux";
import HeaderProfileContainer from "./HeaderProfileContainer";
import {logOut} from "../../../../Redux/AuthReducer";
import {AppState} from "../../../../Redux/Redux-store";



const mapStateToProps = (state: AppState) => {
    return {
        fullName: state.profilePage.fullProfile.fullName,
        isAuth: state.auth.isAuth,
        photo: state.profilePage.fullProfile.photo
    }
};

const ConnectedHeaderProfile = connect(mapStateToProps, {logOut})(HeaderProfileContainer);
export default ConnectedHeaderProfile;