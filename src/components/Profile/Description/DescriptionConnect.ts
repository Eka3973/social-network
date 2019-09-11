import Description from "./Description";
import {connect} from "react-redux";
import {AppState} from "../../../Redux/Redux-store";

const mapStateToProps =(state: AppState)=> {
    return {
        fullProfile: state.profilePage.fullProfile,
        github: state.profilePage.fullProfile.contacts.github
    }
};
const ConnectedDescription = connect(mapStateToProps)(Description);
export  default ConnectedDescription;