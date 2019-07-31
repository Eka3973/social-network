import {connect} from "react-redux";
import  NavBar from "./NavBar"
import {withRouter} from "react-router-dom";
import {AppState} from "../../Redux/Redux-store";

const mapStateToProps = (state: AppState) => {
    return {
        navBarPage: state.navBarPage
    }
};

const ConnectedNavBarPage = withRouter(connect(mapStateToProps)(NavBar));
export default ConnectedNavBarPage;