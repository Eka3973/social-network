import {addPost, clearForm} from "../../Redux/ProfileReducer";
import {connect} from "react-redux";
import MyPost from "./MyPost";


const ConnectedMyPostsPage = connect(null, {addPost, clearForm})(MyPost);
export default ConnectedMyPostsPage;