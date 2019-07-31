import {connect} from "react-redux";
import EditProfile from "./EditProfile";
import {getEditProfile} from "../../Redux/ProfileReducer";


const ConnectedEditProfile = connect(null, {getEditProfile} )(EditProfile);
export default ConnectedEditProfile;