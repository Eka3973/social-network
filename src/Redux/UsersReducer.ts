import iconUserImg from "../images/user.svg";
import api from "../DAL/samuraiAPI";
import {
    IUserAction,
    IUserId,
    IUsers,
    IUsersTypes,
    SET_USERS,
    SUBSCRIBE,
    UNSUBSCRIBE,
    SET_CURRENT_PAGE,
    BUTTON_DISABLED
} from "../Types/TypesUsers";
import {Dispatch} from "redux";


const setUsersAC = (users: IUsers, usersCount: IUsers) => ({type: SET_USERS, users, usersCount});
const subscribeAC = (userId: IUserId) => ({type: SUBSCRIBE, userId});
const unsubscribeAC = (userId: IUserId) => ({type: UNSUBSCRIBE, userId});
const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage});
const followingInProgressAC = (buttonDisabled: boolean) => ({type: BUTTON_DISABLED, buttonDisabled});

const initialState: IUsersTypes = {
    users: [],
    iconUserSrc: iconUserImg,
    altImg: 'User Avatar',
    pageSize: 5,
    usersCount: 0,
    currentPage: 1,
    buttonDisabled: false

};

const usersReducer = (state = initialState, action: IUserAction) => {

    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
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
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage};

        }
        case BUTTON_DISABLED: {
            return {...state, buttonDisabled: action.buttonDisabled};
        }
        default:
            return state;
    }
};

export const getUsers = () => {
    return (dispatch: Dispatch, getState: any) => {
        let pageSize = getState().usersPage.pageSize;
        let currentPage = getState().usersPage.currentPage;
        api.setUsers(pageSize, currentPage)
            .then((data: any) => {
                    dispatch(setUsersAC(
                        data.items,
                        data.totalCount));
                }
            );
    };
};


export const subscribe = (userId: IUserId) => {
    return (dispatch: Dispatch) => {
        dispatch(followingInProgressAC(true));
        api.setSubscribe(userId)
            .then(async (userId: any) => {
                await dispatch(subscribeAC(userId));
                await dispatch(followingInProgressAC(false));
            });
        // .catch((res) => {
        //     if (res.response.status === 401) {
        //         alert("No access rights. Please log in.")
        //     }
        // })
    }

};

export const unsubscribe = (userId: IUserId) => {
    return (dispatch: Dispatch) => {
        dispatch(followingInProgressAC(true));
        api.setUnsubscribe(userId)
            .then((userId) => {
                dispatch(unsubscribeAC(userId));
                dispatch(followingInProgressAC(false));
            });

    }
};

export const setCurrentPage = (currentPage: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setCurrentPageAC(currentPage));

    }
};

export default usersReducer;