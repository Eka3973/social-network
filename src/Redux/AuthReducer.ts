import api from "../DAL/samuraiAPI";


const SET_IS_AUTH = 'SN/AUTH/SET_IS_AUTH';
const SET_USER_INFO = 'SN/AUTH/SET_USER_INFO';



let initialState = {
    isAuth: false,
    userInfo: {
        userId: '',
        userName: ''

    }

};

const AuthReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case SET_IS_AUTH: {
            return {...state, isAuth: action.value};
        }
        case SET_USER_INFO: {
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    userId: action.userId,
                    userName: action.userName
                }
            };
        }

        default:
            return state;
    }
};
export default AuthReducer;


export const me = () => {
    return (dispatch: Function) => {
        return api.setMe()
            .then((data: any) => {
                if (data.resultCode === 0) {
                    dispatch(setUserInfo(data.data.id, data.data.login));
                }
            });
    }
};



export const logOut = () => {
    return (dispatch: Function) => {
        api.setLogout()
            .then((resultCode: any) => {
                    if (resultCode === 0) {
                        dispatch(setIsAuth(false));
                        dispatch(setUserInfo(null, ''));
                    }
                }
            )
    }
};


export const setIsAuth = (value: boolean) => ({type: SET_IS_AUTH, value});
export const setUserInfo = (userId: number | null, userName: string) => ({type: SET_USER_INFO, userId, userName});


