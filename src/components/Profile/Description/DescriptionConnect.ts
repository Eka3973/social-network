import Description from "./Description";
import {connect} from "react-redux";

const mapStateToProps =(state:any)=> {
    return {
        fullProfile: state.profilePage.fullProfile,
        github: state.profilePage.fullProfile.contacts.github
    }
};
const ConnectedDescription = connect(mapStateToProps)(Description);
export  default ConnectedDescription;