import {connect} from "react-redux";
import Followers from "./Following";
import {unsubscribe} from "../../Redux/UsersReducer";
import {withRouter} from "react-router-dom";
import {AppState} from "../../Redux/Redux-store";

const mapStateToProps =(state: AppState) => {
    return {
        users: state.usersPage.users,
        iconUserSrc: state.usersPage.iconUserSrc,
        altImg: state.usersPage.altImg

    }
};

const ConnectedFollowers = withRouter(connect(mapStateToProps, {unsubscribe})(Followers));
export default ConnectedFollowers;