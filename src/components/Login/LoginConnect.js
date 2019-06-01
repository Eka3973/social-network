import {connect} from "react-redux";
import LoginContainer from "./LoginContainer";
import {loginUp} from "../../Redux/LoginReducer";



const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        status: state.loginPage.status,
        message: state.loginPage.message,
        // captchaUrl: state.login.captchaUrl
    }
};
const ConnectedLogin = connect(mapStateToProps, {loginUp})(LoginContainer);
export default ConnectedLogin;