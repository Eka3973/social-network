import {connect} from "react-redux";
import Followers from "./Following";
import {subscribe, unsubscribe} from "../../Redux/UsersReducer";

const mapStateToProps =(state) => {
    return {
        users: state.usersPage.users,
        iconUserSrc: state.usersPage.iconUserSrc,
        altImg: state.usersPage.altImg

    }
};

const ConnectedFollowers = connect(mapStateToProps, {unsubscribe, subscribe})(Followers);
export default ConnectedFollowers;