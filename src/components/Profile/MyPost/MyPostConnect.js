import {addPost} from "../../../Redux/ProfileReducer";
import {connect} from "react-redux";
import MyPost from "./MyPost";


const mapStateToProps = (state) => {

    return {
        myPosts: state.profilePage.myPosts,

    }
};

const ConnectedMyPostsPage = connect(mapStateToProps, {addPost})(MyPost);
export default ConnectedMyPostsPage;