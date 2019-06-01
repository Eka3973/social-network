import {connect} from "react-redux";
import HeaderProfile from "./HeaderProfile";
import {logOut, me,} from "../../../../Redux/AuthReducer";
import {isLogin} from "../../../../Redux/LoginReducer";




const mapStateToProps = (state) => {
    return {
        userInfo: state.auth.userInfo,
        isAuth: state.auth.isAuth,
        photo: state.profilePage.photo
    }
};

const ConnectedHeaderProfile = connect(mapStateToProps, {me, logOut ,isLogin})(HeaderProfile);
export default ConnectedHeaderProfile;