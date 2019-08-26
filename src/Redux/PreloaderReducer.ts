
import {IPreloader, IPreloaderAction, PRELOADER} from "../Types/TypesPreloader";


const initialState: IPreloader = {
    isPreloader: false
};


const preloaderReducer = (state = initialState, action: IPreloaderAction) => {

    switch (action.type) {

        case PRELOADER: {
            return {
                ...state,
                isPreloader: action.isPreloader
            };
        }
        default:
            return state;
    }
};
export const setPreloader = (isPreloader: any) => {
    return (dispatch: any) => {
           dispatch(showPreloader(isPreloader));

    }
};



export default preloaderReducer;

const showPreloader = (isPreloader: IPreloader) => ({type: PRELOADER, isPreloader});