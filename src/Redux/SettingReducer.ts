import api from "../DAL/samuraiAPI";
import {IStatus} from "../DAL/entities/Entities";


const ADD_STATUS = 'SW/PROFILE/ADD_STATUS';

const initialState = {
    status: ''
};


const settingReducer = (state = initialState, action: any) => {

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
    return (dispatch: Function, getState: any) => {
        let userId = getState().auth.userInfo.userId;
        api.getProfileStatus(userId)
            .then((data: any) => {
                dispatch(addStatus(data));
            })
    }
};
export const saveNewStatus = (status: string) => {
    return (dispatch: Function) => {
        api.getNewProfileStatus(status)
            .then(() => {
                    dispatch(setProfileStatus());
                }
            )
    }
};


export default settingReducer;

const addStatus = (status: IStatus) => ({type: ADD_STATUS, status});