import {connect} from "react-redux";
import ProfileImg from "./ProfileImg";

const mapStateToProps = (state: any) => {
    return {
        profileHeader: state.profilePage.profileHeader
    }
};
const ConnectedProfileImg = connect(mapStateToProps)(ProfileImg);
export default ConnectedProfileImg;
