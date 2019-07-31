import iconUserImg from "../images/user.svg";
import api from "../DAL/samuraiAPI";
import {IuserAction, IuserId, Iusers, IUsersTypes, SET_USERS, SUBSCRIBE, UNSUBSCRIBE} from "../Types/TypesUsers";
import {Dispatch} from "redux";


const setUsersAC = (users: Iusers) => ({type: SET_USERS, users});
const subscribeAC = (userId: IuserId) => ({type: SUBSCRIBE, userId});
const unsubscribeAC = (userId: IuserId) => ({type: UNSUBSCRIBE, userId});


const initialState: IUsersTypes = {
    users: [],
    iconUserSrc: iconUserImg,
    altImg: 'User Avatar',
    path: '/users'
};

const usersReducer = (state = initialState, action: IuserAction) => {

    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.users};

        case UNSUBSCRIBE: {
            const copy = {...state, users: [...state.users]};
            const user: any = copy.users.find((elem: any) => elem.id === action.userId);
            user.followed = false;
            return copy;
        }
        case SUBSCRIBE: {
            const copy = {...state, users: [...state.users]};
            const user: any = copy.users.find((elem: any) => elem.id === action.userId);
            user.followed = true;
            return copy;
        }
        default:
            return state;
    }
};

export const getUsers = () => {
    return (dispatch: Dispatch) => {
        api.setUsers()
            .then((users) => {
                    dispatch(setUsersAC(users));
                }
            );
    };
};


export const subscribe = (userId:IuserId) => {
    return (dispatch: Dispatch) => {
        api.setSubscribe(userId)
            .then((userId) => {
                dispatch(subscribeAC(userId));
            })
            // .catch((res) => {
            //     if (res.response.status === 401) {
            //         alert("No access rights. Please log in.")
            //     }
            // })
    }
};

export const unsubscribe = (userId:IuserId) => {
    return (dispatch: Dispatch) => {
        api.setUnsubscribe(userId)
            .then((userId) => {
                dispatch(unsubscribeAC(userId))
            })
    }
};

export default usersReducer;