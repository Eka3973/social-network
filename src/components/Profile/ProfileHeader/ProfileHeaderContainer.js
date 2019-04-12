import ProfileHeader from "./ProfileHeader";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        profileHeader: state.profilePage.profileHeader
    }
};

const ConnectedProfileHeader = connect(mapStateToProps)(ProfileHeader);
export default ConnectedProfileHeader;