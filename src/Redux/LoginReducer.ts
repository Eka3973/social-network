import {me, setIsAuth} from "./AuthReducer";
import {getUsers} from "./UsersReducer";
import {getUserProfile} from "./ProfileReducer";
import api from "../DAL/samuraiAPI";
import {setProfileStatus} from "./SettingReducer";




const SET_STATUS = 'SN/LOGIN/SET_STATUS';
const SET_MESSAGE = 'SN/LOGIN/SET_MESSAGE';


export const statuses = {
    INIT: 'INIT',
    ERROR: 'ERROR',
    INPROGRESS: 'INPROGRESS',
    CAPTCHAREQUIRED: 'CAPTCHAREQUIRED',
    SUCCESS: 'SUCCES'
};

let initialState = {
    status: statuses.INIT,
    message: ''

};

const loginReducer = (state = initialState, action: any) => {

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

export const loginUp = (login: string, password: string, rememberMe: boolean) => {
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



export const setStatus = (status: string) => ({type: SET_STATUS, status});
export const setMessage = (message: string) => ({type: SET_MESSAGE, message});
