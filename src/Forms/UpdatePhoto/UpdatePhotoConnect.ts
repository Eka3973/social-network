import {connect} from "react-redux";
import UpdatePhoto from "./UpdatePhoto";

import {setImageChange, getUserProfile, getUrlPhotoToProfile} from "../../Redux/ProfileReducer";



const mapStateToProps = (state: any) => {

    return {
        previewImage: state.profilePage.previewImage,
        file: state.profilePage.file,
    }
};

const ConnectedMyPostsPage = connect(mapStateToProps, {setImageChange, getUrlPhotoToProfile, getUserProfile})(UpdatePhoto);
export default ConnectedMyPostsPage;