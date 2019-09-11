import {IPreloader, IPreloaderAction, PRELOADER} from "../Types/TypesPreloader";
import {Dispatch} from "redux";

const showPreloader = (isPreloader: boolean) => ({type: PRELOADER, isPreloader});

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

export const setPreloader = (isPreloader: boolean) => {
    return (dispatch: Dispatch) => {
        dispatch(showPreloader(isPreloader));
    }
};

export default preloaderReducer;

