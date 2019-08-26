import {connect} from "react-redux";

import Pagination from "./Pagination";
import {AppState} from "../../../Redux/Redux-store";
import {getUsers, setCurrentPage} from "../../../Redux/UsersReducer";


const mapStateToProps = (state: AppState) => {
    return {
        pageSize: state.usersPage.pageSize,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage
    }
};

const ConnectedMembers = connect(mapStateToProps, {getUsers, setCurrentPage})(Pagination);
export default ConnectedMembers;