import api from "../DAL/samuraiAPI";
import {AuthActionType, IAuthType, SET_IS_AUTH, SET_USER_INFO} from "../Types/TypesAuth";
import {Dispatch} from "redux";


export const setIsAuth = (isAuth: boolean) => ({type: SET_IS_AUTH, isAuth});
export const setUserInfo = (userId: number | null) => ({type: SET_USER_INFO, userId});


let initialState: IAuthType = {
    isAuth: false,
    userInfo: {
        userId: null
    }
};

const AuthReducer = (state = initialState, action: AuthActionType) => {

    switch (action.type) {
        case SET_IS_AUTH: {
            return {...state, isAuth: action.isAuth};
        }
        case SET_USER_INFO: {
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    userId: action.userId
                }
            };
        }
        default:
            return state;
    }
};
export default AuthReducer;


export const me = () => {
    return (dispatch: Dispatch) => {
        return api.setMe()
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(setUserInfo(data.data.id));
                }
            });
    }
};


export const logOut = () => {
    return (dispatch: Dispatch) => {
        api.setLogout()
            .then((resultCode) => {
                    if (resultCode === 0) {
                        dispatch(setIsAuth(false));
                        dispatch(setUserInfo(null));
                    }
                }
            )
    }
};





