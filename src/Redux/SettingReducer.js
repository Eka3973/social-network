import api from "../DAL/samuraiAPI";


const ADD_STATUS = 'SW/PROFILE/ADD_STATUS';

const initialState = {
    status: null
};


const settingReducer = (state = initialState, action) => {

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
    return (dispatch, getState) => {
        let userId = getState().auth.userInfo.userId;
        api.getProfileStatus(userId)
            .then(res => {
                dispatch(addStatus(res.data));
            })
    }
};
export const saveNewStatus = (status) => {
    return (dispatch) => {
        api.getNewProfileStatus(status)
            .then( () => {
                    dispatch(setProfileStatus(status));
                }
            )
    }
};


export default settingReducer;

const addStatus = (status) => ({type: ADD_STATUS, status});