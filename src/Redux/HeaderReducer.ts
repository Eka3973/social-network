import search from "../images/seach.svg";
import {IHeaderState} from "../Types/TypesHeader";


let initialState: IHeaderState = {
            iconSrc: search,
            iconAlt: 'Button search'
        };

const headerReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
};
export default headerReducer;