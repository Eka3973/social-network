import {connect} from "react-redux";
import {AppState} from "../../../Redux/Redux-store";
import ProfileContacts from "./ProfileContacts";

const mapStateToProps = (state: AppState) => {
    return {
        contacts: state.profilePage.fullProfile.contacts

    }
};
const ConnectedProfileContacts = connect(mapStateToProps)(ProfileContacts);
export default ConnectedProfileContacts;
