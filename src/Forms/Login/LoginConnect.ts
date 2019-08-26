import {connect} from "react-redux";
import Login from "./Login";
import {loginUp} from "../../Redux/LoginReducer";
import {AppState} from "../../Redux/Redux-store";



const mapStateToProps = (state: AppState) => {
    return {
        isAuth: state.auth.isAuth,
        status: state.loginPage.status,
        message: state.loginPage.message,
        isPreloader: state.preloaderPage.isPreloader
        // captchaUrl: state.login.captchaUrl
    }
};
const ConnectedLogin = connect(mapStateToProps, {loginUp})(Login);
export default ConnectedLogin;