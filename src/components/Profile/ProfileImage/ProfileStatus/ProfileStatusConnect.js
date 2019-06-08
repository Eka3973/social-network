
import {connect} from "react-redux";
import {saveNewStatus} from "../../../../Redux/SettingReducer";
import ProfileStatus from "./ProfileStatus";

const mapStateToProps = (state) => {
    return {
        status: state.settingPage.status
    }
};
const ConnectedProfileStatus = connect(mapStateToProps, {saveNewStatus})(ProfileStatus);
export default ConnectedProfileStatus;