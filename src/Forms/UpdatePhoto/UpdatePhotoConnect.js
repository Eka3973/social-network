import {connect} from "react-redux";
import UpdatePhoto from "./UpdatePhoto";

import {setImageChange, setProfileId, setUrlPhotoToProfile} from "../../Redux/ProfileReducer";



const mapStateToProps = (state) => {

    return {
        previewImage: state.profilePage.previewImage,
        file: state.profilePage.file,
    }
};

const ConnectedMyPostsPage = connect(mapStateToProps, {setImageChange, setUrlPhotoToProfile, setProfileId})(UpdatePhoto);
export default ConnectedMyPostsPage;