import connect from "react-redux/es/connect/connect";
import HeaderSearchForm from "./HeaderSearchForm";



const mapStateToProps = (state) => {
    return {
        iconSrc: state.headerPage.iconSrc,
        iconAlt: state.headerPage.iconAlt
    }
};

const ConnectedHeaderSearchForm = connect(mapStateToProps)(HeaderSearchForm);
export default ConnectedHeaderSearchForm;