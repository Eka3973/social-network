import {addPost} from "../../../Redux/ProfileReducer";
import {connect} from "react-redux";
import MyPost from "./MyPost";



const ConnectedMyPostsPage = connect(null, {addPost})(MyPost);
export default ConnectedMyPostsPage;