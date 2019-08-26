import iconUserImg from "../images/user.svg";
import api from "../DAL/samuraiAPI";
import {IuserAction, IuserId, Iusers, IUsersTypes, IcurrentPage, SET_USERS, SUBSCRIBE, UNSUBSCRIBE, SET_CURRENT_PAGE} from "../Types/TypesUsers";
import {Dispatch} from "redux";

const setUsersAC = (users: Iusers, usersCount: Iusers) => ({type: SET_USERS, users, usersCount});
const subscribeAC = (userId: IuserId) => ({type: SUBSCRIBE, userId});
const unsubscribeAC = (userId: IuserId) => ({type: UNSUBSCRIBE, userId});
const setCurrentPageAC = (currentPage: IcurrentPage)=>({type: SET_CURRENT_PAGE, currentPage});

const initialState: IUsersTypes = {
    users: [],
    iconUserSrc: iconUserImg,
    altImg: 'User Avatar',
    pageSize: 5,
    usersCount: 0,
    currentPage: 1

};

const usersReducer = (state = initialState, action: IuserAction) => {

    switch (action.type) {
        case SET_USERS:
            return {...state,
                users: action.users,
                usersCount: action.usersCount
            };

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
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        default:
            return state;
    }
};

export const getUsers = () => {
    return (dispatch: Dispatch, getState: any) => {
        let pageSize = getState().usersPage.pageSize;
        let currentPage = getState().usersPage.currentPage;
        api.setUsers(pageSize, currentPage)
            .then((data:any) => {
                    dispatch(setUsersAC(
                        data.items,
                        data.totalCount));
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

export const setCurrentPage = (currentPage: any) => {
    return (dispatch: Dispatch) => {
                dispatch(setCurrentPageAC(currentPage));

    }
};

export default usersReducer;