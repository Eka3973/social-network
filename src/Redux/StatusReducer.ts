import api from "../DAL/samuraiAPI";
import {ADD_STATUS, IStatusAction, IStatus} from "../Types/TypesStatus";
import {Dispatch} from "redux";



const initialState: IStatus = {
    status: ''
};


const statusReducer = (state = initialState, action: IStatusAction) => {

    switch (action.type) {

        case ADD_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
};
export const setProfileStatus = () => {
    return (dispatch: Dispatch, getState: any) => {
        let userId = getState().auth.userInfo.userId;
        api.getProfileStatus(userId)
            .then((data) => {
                dispatch(addStatus(data));
            })
    }
};
export const saveNewStatus = (status: any) => {
    return (dispatch: Function) => {
        api.getNewProfileStatus(status)
            .then(() => {
                    dispatch(setProfileStatus());
                }
            )
    }
};


export default statusReducer;

const addStatus = (status: IStatus) => ({type: ADD_STATUS, status});