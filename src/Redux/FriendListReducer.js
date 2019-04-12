import samuraiAPI from "../components/DAL/CreateInstance";
import iconUserImg from "../images/user.svg";
import {getFriends, getSubscribe} from "../components/DAL/samuraiAPI";

export const SET_FRIENDS = 'SN/FRIENDS_LIST/SET_FRIEND';
export const UNSUBSCRIBE = 'SN/USERS/UNSUBSCRIBE';
export const SUBSCRIBE = 'SN/USERS/SUBSCRIBE';


const initialState = {
    users: [],
    iconUserSrc: iconUserImg,
    altImg: 'User Avatar'

};

const friendListReducer = (state = initialState, action) => {
    let copy;
    let user;
    switch (action.type) {
        case SET_FRIENDS:
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
            return copy;
        }
        default:
            return state;
    }
};

export const setUsers = (users) => {
    return dispatch => {
        getFriends(users).then(res => {
                dispatch(setUsersAC(res));
            }
        );
    };
};


export const subscribe = (userId) => {
    return dispatch => {
        getSubscribe(userId).then(res => {
            dispatch(subscribeAC(res));
        }

        )
    }
};

export const unsubscribeAC = (userId) => {
    return dispatch => {
        samuraiAPI.delete('follow/' + userId)
            .then(() => {
                dispatch(unsubscribe(userId));
            })
    }
};

export const setUsersAC = (users) => ({type: SET_FRIENDS, users});
export const subscribeAC = (userId) => ({type: SUBSCRIBE, userId});
export const unsubscribe = (userId) => ({type: UNSUBSCRIBE, userId});

export default friendListReducer;