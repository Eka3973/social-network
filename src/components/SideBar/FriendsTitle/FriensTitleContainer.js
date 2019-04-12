import FriendsTitle from "./FriendsTitle";
import {connect} from "react-redux";
import {setUsers} from "../../../Redux/FriendListReducer";

const mapStateToProps = (state) => {
    return{
        path: state.sideBarPage.path

    }
};

const mapDispatchToProps = (dispatch) => ({
    setUsers: (users) => {
        dispatch(setUsers(users))
    },
});

const ConnectedSideBarTitle = connect(mapStateToProps, mapDispatchToProps)(FriendsTitle);
export default  ConnectedSideBarTitle;