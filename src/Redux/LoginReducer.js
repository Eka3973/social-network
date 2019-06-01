import {me, setIsAuth} from "./AuthReducer";
import {makeLogin} from "../DAL/samuraiAPI";
import {setUsers} from "./UsersReducer";
import {setProfileId} from "./ProfileReducer";




const SET_STATUS = 'SN/LOGIN/SET_STATUS';
const SET_MESSAGE = 'SN/LOGIN/SET_MESSAGE';
const SET_IS_LOGIN = 'SN/LOGIN/SET_IS_LOGIN';


export const statuses = {
    INIT: 'INIT',
    ERROR: 'ERROR',
    INPROGRESS: 'INPROGRESS',
    CAPTCHAREQUIRED: 'CAPTCHAREQUIRED',
    SUCCESS: 'SUCCES'
};

let initialState = {
    status: statuses.INIT,
    message: '',
    isLogin: false
};

const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_STATUS: {
            return {...state, status: action.status};
        }
            case SET_MESSAGE:{
                return {...state, message: action.message};
            }
        case SET_IS_LOGIN: {
            
            return {...state, isLogin: !state.isLogin}
        }

        default:
            return state;
    }
};
export default loginReducer;

export const loginUp = (login, password, rememberMe) => {
    return dispatch => {
        setStatus(statuses.INPROGRESS);
        //запуск крутилки
        makeLogin(login, password, rememberMe)
       .then(async res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatus(statuses.SUCCESS));
                dispatch(setIsAuth(true));

                await dispatch(me());
                dispatch(setProfileId());
                dispatch(setUsers());
                dispatch(isLogin());


                // disable крутилку
            } else {
                dispatch(setStatus(statuses.ERROR));
                dispatch(setMessage(res.data.messages[0]));
                // disable крутилку
            }
        })
    }
};


export const isLogin = () => ({type: SET_IS_LOGIN});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setMessage = (message) => ({type: SET_MESSAGE, message});
