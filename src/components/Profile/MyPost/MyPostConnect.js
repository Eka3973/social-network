import {addPostActionCreator} from "../../../Redux/ProfileReducer";
import {connect} from "react-redux";
import MyPostContainer from "./MyPostContainer";


const mapStateToProps = (state) => {

    return {
        myPosts: state.profilePage.myPosts,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost(addedPost){
            dispatch(addPostActionCreator(addedPost))
        }

    }
};

const ConnectedMyPostsPage = connect(mapStateToProps, mapDispatchToProps)(MyPostContainer);
export default ConnectedMyPostsPage;