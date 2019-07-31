import HeaderSearchForm from "./HeaderSearchForm";
import {connect} from "react-redux";
import {AppState} from "../../../../Redux/Redux-store";



const mapStateToProps = (state: AppState) => {
    return {
        iconSrc: state.headerPage.iconSrc,
        iconAlt: state.headerPage.iconAlt
    }
};

const ConnectedHeaderSearchForm = connect(mapStateToProps)(HeaderSearchForm);
export default ConnectedHeaderSearchForm;