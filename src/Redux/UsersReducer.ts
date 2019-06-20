import iconUserImg from "../images/user.svg";
import api from "../DAL/samuraiAPI";


export const SET_USERS = 'SN/USERS/SET_USERS';
export const UNSUBSCRIBE = 'SN/USERS/UNSUBSCRIBE';
export const SUBSCRIBE = 'SN/USERS/SUBSCRIBE';


const initialState = {
    users: [],
    iconUserSrc: iconUserImg,
    altImg: 'User Avatar',
    path: '/users',
};

const usersReducer = (state = initialState, action: any) => {
    let copy;
    let user: any;
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.users};

        case UNSUBSCRIBE: {
            copy = {...state, users: [...state.users]};
            user = copy.users.find((elem: any) => elem.id === action.userId);
            user.followed = false;
            return copy;
        }
        case SUBSCRIBE: {
            copy = {...state, users: [...state.users]};
            user = copy.users.find((elem: any) => elem.id === action.userId);
            user.followed = true;
            user.friend = true;
            return copy;
        }
        default:
            return state;
    }
};

export const getUsers = () => {
    return (dispatch: Function) => {
        api.setUsers()
            .then((items: any) => {
                dispatch(setUsersAC(items));
            }
        );
    };
};


export const subscribe = (userId: any) => {
    return (dispatch: Function) => {
        api.setSubscribe(userId)
            .then((userId: any) => {
            dispatch(subscribeAC(userId));
        })
            .catch((res: any) => {
                if (res.response.status === 401) {
                    alert("No access rights. Please log in.")
                }
            })
    }
};

export const unsubscribe = (userId: any) => {
    return (dispatch: Function) => {
        api.setUnsubscribe(userId)
            .then((userId: any) => {
            dispatch(unsubscribeAC(userId))
        })
    }
};

const setUsersAC = (users:any) => ({type: SET_USERS, users});
const subscribeAC = (userId: any) => ({type: SUBSCRIBE, userId});
const unsubscribeAC = (userId: any) => ({type: UNSUBSCRIBE, userId});


export default usersReducer;