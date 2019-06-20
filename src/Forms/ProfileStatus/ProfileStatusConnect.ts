
import {connect} from "react-redux";
import {saveNewStatus} from "../../Redux/SettingReducer";
import ProfileStatus from "./ProfileStatus";


const ConnectedProfileStatus = connect((state:any) => ({

    initialValues:
    state.settingPage.status

}), {saveNewStatus})(ProfileStatus);

export default ConnectedProfileStatus;