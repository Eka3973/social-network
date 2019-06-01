import {connect} from "react-redux";
import {setUsers, subscribe, unsubscribe} from "../../Redux/UsersReducer";
import Members from "./Members";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        iconUserSrc: state.usersPage.iconUserSrc,
        altImg: state.usersPage.altImg
    }
};

const ConnectedMembers = connect(mapStateToProps, {setUsers, subscribe, unsubscribe})(Members);
export default ConnectedMembers;