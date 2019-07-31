import Description from "./Description";
import {connect} from "react-redux";

const mapStateToProps =(state:any)=> {
    return {
        aboutMe: state.profilePage.fullProfile.aboutMe,
        photo: state.profilePage.fullProfile.photo,
        fullName: state.profilePage.fullProfile.fullName,
        lookingForAJob: state.profilePage.fullProfile.lookingForAJob,
        lookingForAJobDescription: state.profilePage.fullProfile.lookingForAJobDescription
    }
};
const ConnectedDescription = connect(mapStateToProps)(Description);
export  default ConnectedDescription;