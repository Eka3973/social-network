import {addPostActionCreator, addUpdateNewPostActionCreator} from "../../../Redux/ProfileReducer";
import {connect} from "react-redux";
import MyPost from "./MyPost";


const mapStateToProps = (state) => {

    return {
        myPosts: state.profilePage.myPosts,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost(addedPost){
            dispatch(addPostActionCreator(addedPost))
        },
        updatePost(enteredTextPost){
            dispatch (addUpdateNewPostActionCreator(enteredTextPost))
        }

    }
};

const ConnectedMyPostsPage = connect(mapStateToProps, mapDispatchToProps)(MyPost);
export default ConnectedMyPostsPage;