import {connect} from "react-redux";
import HorizontalMenu from "./HorizontalMenu";

const mapStateToProps = (state) => {
    return{
        path: state.usersPage.path

    }
};

const ConnectedHorizontalMenu = connect(mapStateToProps)(HorizontalMenu);
export default  ConnectedHorizontalMenu;