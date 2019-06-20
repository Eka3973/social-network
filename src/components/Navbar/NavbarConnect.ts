import {connect} from "react-redux";
import Navbar from "./Navbar"
import {withRouter} from "react-router-dom";

const mapStateToProps = (state: any) => {
    return {
        navBarPage: state.navBarPage
    }
};

const ConnectedNavbarPage = withRouter(connect(mapStateToProps)(Navbar));
export default ConnectedNavbarPage;