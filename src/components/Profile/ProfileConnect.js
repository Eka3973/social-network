import {connect} from "react-redux";
import Profile from "./Profile";
import {saveNewStatus} from "../../Redux/SettingReducer";


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        status:state.settingPage.status
    }
};


const ConnectedProfile = connect(mapStateToProps, {saveNewStatus})(Profile);
export default ConnectedProfile;