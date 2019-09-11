import {connect} from "react-redux";
import Posts from "./Posts";
import {AppState} from "../../../Redux/Redux-store";


const mapStateToProps = (state: AppState) => {

    return {
        posts: state.profilePage.posts
    }

};
const ConnectedPost = connect(mapStateToProps)(Posts);
export default ConnectedPost;