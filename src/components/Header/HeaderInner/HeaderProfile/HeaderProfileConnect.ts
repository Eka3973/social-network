import {connect} from "react-redux";
import HeaderProfile from "./HeaderProfile";
import {logOut, me,} from "../../../../Redux/AuthReducer";



const mapStateToProps = (state: any) => {
    return {
        userInfo: state.auth.userInfo,
        isAuth: state.auth.isAuth,
        photo: state.profilePage.photo
    }
};

const ConnectedHeaderProfile = connect(mapStateToProps, {me, logOut})(HeaderProfile);
export default ConnectedHeaderProfile;