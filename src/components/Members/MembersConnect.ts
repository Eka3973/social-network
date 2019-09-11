import {connect} from "react-redux";
import {subscribe, unsubscribe} from "../../Redux/UsersReducer";
import Members from "./Members";
import {AppState} from "../../Redux/Redux-store";
import {getButtonDisabled, getIconUser, getMembers, getUsersAlt} from "../../Redux/UsersSelectors";


const mapStateToProps = (state: AppState) => {
    return {
        users: getMembers(state),
        iconUserSrc: getIconUser(state),
        altImg: getUsersAlt(state),
        buttonDisabled: getButtonDisabled(state)
    }
};

const ConnectedMembers = connect(mapStateToProps, {subscribe, unsubscribe})(Members);
export default ConnectedMembers;