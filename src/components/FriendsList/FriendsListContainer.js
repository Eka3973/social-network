import {connect} from "react-redux";
import {setUsers, subscribe, unsubscribe} from "../../Redux/FriendListReducer";
import FriendsList from "./FriendsList";


const mapStateToProps = (state) => {
    return {
        users: state.friendListPage.users,
        iconUserSrc: state.friendListPage.iconUserSrc,
        altImg: state.friendListPage.altImg
    }
};

const mapDispatchToProps = (dispatch) => ({
    setUsers: (users) => {
        dispatch(setUsers(users))
    },
    subscribe: (userId) => {
        dispatch(subscribe(userId))
    },
    unsubscribe: (userId) => {
        dispatch(unsubscribe(userId))
    },

});


const ConnectedFriends = connect(mapStateToProps, mapDispatchToProps)(FriendsList);
export default ConnectedFriends;