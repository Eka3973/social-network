import HeaderSearchForm from "./HeaderSearchForm";
import {connect} from "react-redux";



const mapStateToProps = (state:any) => {
    return {
        iconSrc: state.headerPage.iconSrc,
        iconAlt: state.headerPage.iconAlt
    }
};

const ConnectedHeaderSearchForm = connect(mapStateToProps)(HeaderSearchForm);
export default ConnectedHeaderSearchForm;