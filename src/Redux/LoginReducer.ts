import {me, setIsAuth} from "./AuthReducer";
import {getUsers} from "./UsersReducer";
import {getUserProfile} from "./ProfileReducer";
import api from "../DAL/samuraiAPI";
import {setProfileStatus} from "./StatusReducer";
import {ILoginAction, ILoginForm, ILoginState, SET_MESSAGE, SET_STATUS} from "../Types/TypesLogin";


export const setStatus = (status: any) => ({type: SET_STATUS, status});
export const setMessage = (message: ILoginState) => ({type: SET_MESSAGE, message});

export const statuses = {
    INIT: 'INIT',
    ERROR: 'ERROR',
    INPROGRESS: 'INPROGRESS',
    CAPTCHAREQUIRED: 'CAPTCHAREQUIRED',
    SUCCESS: 'SUCCES'
};

const initialState: ILoginState = {
    status: statuses.INIT,
    message: []

};

const loginReducer = (state = initialState, action: ILoginAction) => {

    switch (action.type) {
        case SET_STATUS: {
            return {...state, status: action.status};
        }
            case SET_MESSAGE:{
                return {...state, message: action.message};
            }

        default:
            return state;
    }
};
export default loginReducer;

export const loginUp = (login: ILoginForm, password: ILoginForm, rememberMe: ILoginForm) => {
    return (dispatch: any) => {
        setStatus(statuses.INPROGRESS);
        //запуск крутилки
        api.makeLogin(login, password, rememberMe)
       .then(async (data: any) => {
            if (data.resultCode === 0) {
                await dispatch(setStatus(statuses.SUCCESS));
                await dispatch(setIsAuth(true));
                await dispatch(me());
                await dispatch(getUserProfile());
                await dispatch(setProfileStatus());
                await dispatch(getUsers());
                // disable крутилку
            } else {
                dispatch(setStatus(statuses.ERROR));
                dispatch(setMessage(data.messages[0]));
                // disable крутилку
            }
        })
    }
};




