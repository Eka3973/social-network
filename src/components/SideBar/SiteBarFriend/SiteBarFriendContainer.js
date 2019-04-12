import SideBarFriend from "./SideBarFriend";
import {connect} from "react-redux";

const mapStateToProps =(state) => {
    return {
        users: state.friendListPage.users,
        iconUserSrc: state.friendListPage.iconUserSrc,
        altImg: state.friendListPage.altImg

    }
};
const ConnectedSideBarFriends = connect(mapStateToProps)(SideBarFriend);
export default ConnectedSideBarFriends;