import {connect} from "react-redux";
import PageChangePhoto from "./PageChangePhoto";

import {setImageChange, setProfileId, setUrlPhotoToProfile} from "../../../../../Redux/ProfileReducer";



const mapStateToProps = (state) => {

    return {
        previewImage: state.profilePage.previewImage,
        file: state.profilePage.file,
    }
};

const ConnectedMyPostsPage = connect(mapStateToProps, {setImageChange, setUrlPhotoToProfile, setProfileId})(PageChangePhoto);
export default ConnectedMyPostsPage;