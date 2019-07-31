import {connect} from "react-redux";
import {saveNewStatus} from "../../Redux/StatusReducer";
import ProfileStatus from "./ProfileStatus";
import {AppState} from "../../Redux/Redux-store";


const ConnectedProfileStatus = connect((state: AppState) => ({
    initialValues:
    state.statusPage.status

}), {saveNewStatus})(ProfileStatus);

export default ConnectedProfileStatus;