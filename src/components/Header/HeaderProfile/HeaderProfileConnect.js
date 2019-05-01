import {connect} from "react-redux";
import HeaderProfile from "./HeaderProfile";
import {logOut, me} from "../../../Redux/AuthReducer";
import {isLogin} from "../../../Redux/LoginReducer";




const mapStateToProps = (state) => {
    return {
        userInfo: state.authPage.userInfo,
        isAuth: state.authPage.isAuth,

    }
};

const mapDispatchToProps = (dispatch) => ({
    me: () => {
        dispatch(me());
    },
    logOut: () => {
        dispatch(logOut());
        dispatch(isLogin());
    }
});



const ConnectedHeaderProfile = connect(mapStateToProps, mapDispatchToProps)(HeaderProfile);
export default ConnectedHeaderProfile;