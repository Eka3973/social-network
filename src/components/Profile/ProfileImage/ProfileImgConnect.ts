import {connect} from "react-redux";
import ProfileImg from "./ProfileImg";
import {AppState} from "../../../Redux/Redux-store";

const mapStateToProps = (state: AppState) => {
    return {
        profileHeader: state.profilePage.profileHeader
    }
};
const ConnectedProfileImg = connect(mapStateToProps)(ProfileImg);
export default ConnectedProfileImg;
