import iconUserImg from "../images/user.svg";
import {getUsers, getSubscribe, getUnsubscribe} from "../DAL/samuraiAPI";

export const SET_USERS = 'SN/USERS/SET_USERS';
export const UNSUBSCRIBE = 'SN/USERS/UNSUBSCRIBE';
export const SUBSCRIBE = 'SN/USERS/SUBSCRIBE';


const initialState = {
    users: [],
    iconUserSrc: iconUserImg,
    altImg: 'User Avatar',
    path: '/users'

};

const usersReducer = (state = initialState, action) => {
    let copy;
    let user;
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.users};

        case UNSUBSCRIBE: {
            copy = {...state, users: [...state.users]};
            user = copy.users.find(elem => elem.id === action.userId);
            user.followed = false;
            return copy;
        }
        case SUBSCRIBE: {
            copy = {...state, users: [...state.users]};
            user = copy.users.find(elem => elem.id === action.userId);
            user.followed = true;
            user.friend = true;
            return copy;
        }
        default:
            return state;
    }
};

export const setUsers = (users) => {
    return dispatch => {
        getUsers(users).then(res => {
                dispatch(setUsersAC(res));
            }
        );
    };
};


export const subscribe = (userId) => {
    return dispatch => {
        getSubscribe(userId)
            .then(res => {
            dispatch(subscribeAC(res));
        })
            .catch((response) => {
                if (response.response.status === 401) {
                    alert("No access rights. Please log in.")
                }
            })
    }
};

export const unsubscribe = (userId) => {
    return dispatch => {
        getUnsubscribe(userId).then(res => {
            dispatch(unsubscribeAC(res))
        })
    }
};





const setUsersAC = (users) => ({type: SET_USERS, users});
const subscribeAC = (userId) => ({type: SUBSCRIBE, userId});
const unsubscribeAC = (userId) => ({type: UNSUBSCRIBE, userId});


export default usersReducer;