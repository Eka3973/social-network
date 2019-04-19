import {connect} from "react-redux";
import HeaderProfileContainer from "./HeaderProfile";
import {logOut, me} from "../../../Redux/AuthReducer";




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
    }
});



const ConnectedHeaderProfile = connect(mapStateToProps, mapDispatchToProps)(HeaderProfileContainer);
export default ConnectedHeaderProfile;