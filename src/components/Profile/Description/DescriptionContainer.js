import Description from "./Description";
import {connect} from "react-redux";

const mapStateToProps =(state)=> {
    return {
        description: state.profilePage.description
    }
};
const ConnectedDescription = connect(mapStateToProps)(Description);
export  default ConnectedDescription;