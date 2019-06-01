import ProfileImage from "./ProfileImage";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        profileHeader: state.profilePage.profileHeader
    }
};

const ConnectedProfileHeader = connect(mapStateToProps)(ProfileImage);
export default ConnectedProfileHeader;