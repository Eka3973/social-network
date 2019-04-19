import samuraiAPI from "../components/DAL/CreateInstance";



const SET_IS_AUTH = 'SN/AUTH/SET_IS_AUTH';
const SET_USER_INFO = 'SN/AUTH/SET_USER_INFO';


let initialState = {
    isAuth: false,
    userInfo: {
        userId: null,
        userName: null,
        avatarUrl: ''
    }
};

const AuthReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_IS_AUTH: {
            return {...state, isAuth: action.value};
        }
        case SET_USER_INFO: {
            return {...state,
                userInfo: {
                    ...state.userInfo,
                    userId: action.login,
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
    return dispatch => {
        samuraiAPI.get('auth/me')
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setIsAuth(true));
                    dispatch(setUserInfo(res.data.data.userId, res.data.data.login));
                }
            })
    }
};

export const logOut = () => {
    return dispatch => {
        samuraiAPI.post('auth/logout')
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setIsAuth(false));
                    dispatch(setUserInfo(null, null));
                }
            })
    }
};


export const setIsAuth = (value) => ({type: SET_IS_AUTH, value});
export const setUserInfo = (userId, userName) => ({type: SET_USER_INFO, userId, userName});
