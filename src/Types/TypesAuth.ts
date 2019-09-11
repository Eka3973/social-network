export const SET_IS_AUTH = 'SN/AUTH/SET_IS_AUTH';
export const SET_USER_INFO = 'SN/AUTH/SET_USER_INFO';


export interface IUserInfoType {
    userId: number | null;
}

export interface IAuthType {
    isAuth: boolean;
    userInfo: IUserInfoType;
}

interface IAuthAction {
    type: typeof SET_IS_AUTH,
    isAuth: boolean
}

interface IUserInfoAction {
    type: typeof SET_USER_INFO,
    userId: number | null

}

export type AuthActionType = IAuthAction | IUserInfoAction;


