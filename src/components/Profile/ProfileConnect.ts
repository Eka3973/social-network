import {connect} from "react-redux";
import Profile from "./Profile";
import {saveNewStatus} from "../../Redux/StatusReducer";
import {withRouter} from "react-router-dom";
import {AppState} from "../../Redux/Redux-store";


const mapStateToProps = (state: AppState) => {
    return {
        isAuth: state.auth.isAuth,
        status: state.statusPage.status,
        isPreloader: state.preloaderPage.isPreloader,

    }
};


const ConnectedProfile = withRouter(connect(mapStateToProps, {saveNewStatus})(Profile));
export default ConnectedProfile;