import {connect} from "react-redux";

import Profile from "./Profile";




const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,

    }
};




const ConnectedProfile = connect(mapStateToProps)(Profile);
export default ConnectedProfile;