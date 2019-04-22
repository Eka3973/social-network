import samuraiAPI from "../components/DAL/CreateInstance";
import {me, setIsAuth} from "./AuthReducer";


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

const loginReducer = (state = initialState, action) => {

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

export const loginUp = (login, password, rememberMe) => {
    return dispatch => {
        setStatus(statuses.INPROGRESS);
        samuraiAPI.post('auth/login', {
            email: login,
            password: password,
            rememberMe: rememberMe
        }).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatus(statuses.SUCCESS));
                dispatch(setIsAuth(true));
                dispatch(me())
            } else {
                dispatch(setStatus(statuses.ERROR));
                dispatch(setMessage(res.data.messages[0]));
            }
        })
    }
};



export const setStatus = (status) => ({type: SET_STATUS, status});
export const setMessage = (message) => ({type: SET_MESSAGE, message});
