import {connect} from "react-redux";
import UpdatePhoto from "./UpdatePhoto";
import {setImageChange, getUserProfile, getUrlPhotoToProfile} from "../../Redux/ProfileReducer";
import {AppState} from "../../Redux/Redux-store";


const mapStateToProps = (state: AppState) => {

    return {
        previewImage: state.profilePage.previewImage,
        file: state.profilePage.file,
    }
};

const ConnectedChangePhotoProfile = connect(mapStateToProps,
    {setImageChange, getUrlPhotoToProfile, getUserProfile})(UpdatePhoto);

export default ConnectedChangePhotoProfile;