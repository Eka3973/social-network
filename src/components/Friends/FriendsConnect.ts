import {connect} from "react-redux";
import Friends from "./Friends";


const mapStateToProps =(state: any) => {
    return {
        users: state.usersPage.users,
        iconUserSrc: state.usersPage.iconUserSrc,
        altImg: state.usersPage.altImg

    }
};

const ConnectedFriends = connect(mapStateToProps)(Friends);
export default ConnectedFriends;