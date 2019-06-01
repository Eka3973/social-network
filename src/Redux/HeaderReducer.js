import search from "../images/seach.svg";


let initialState = {
            iconSrc: search,
            iconAlt: 'Button search'
        };
const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
export default headerReducer;