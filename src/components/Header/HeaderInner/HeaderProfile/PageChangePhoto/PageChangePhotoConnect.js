import {connect} from "react-redux";
import PageChangePhoto from "./PageChangePhoto";
import {setImageChange, setUrlPhotoToProfile} from "../../../../../Redux/PageChangePhotoReducer";
import {setProfileId} from "../../../../../Redux/ProfileReducer";



const mapStateToProps = (state) => {

    return {
        previewImage: state.PageChangePhotoPage.previewImage,
        file: state.PageChangePhotoPage.file,
    }
};

const ConnectedMyPostsPage = connect(mapStateToProps, {setImageChange, setUrlPhotoToProfile, setProfileId})(PageChangePhoto);
export default ConnectedMyPostsPage;