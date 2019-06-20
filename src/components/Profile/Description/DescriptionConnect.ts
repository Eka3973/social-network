import Description from "./Description";
import {connect} from "react-redux";

const mapStateToProps =(state:any)=> {
    return {
        description: state.profilePage.description,
        photo: state.profilePage.photo,
        fullName: state.profilePage.fullName

    }
};
const ConnectedDescription = connect(mapStateToProps)(Description);
export  default ConnectedDescription;