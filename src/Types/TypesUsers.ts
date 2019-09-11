export const SET_USERS = 'SN/USERS/SET_USERS';
export const UNSUBSCRIBE = 'SN/USERS/UNSUBSCRIBE';
export const SUBSCRIBE = 'SN/USERS/SUBSCRIBE';
export const SET_CURRENT_PAGE = 'SN/USERS/SET_CURRENT_PAGE';
export const BUTTON_DISABLED = 'SN/USERS/BUTTON_DISABLED';

export interface IUserId {
    userId: number
}

export interface IUsersPhoto {
    photos: {
        small: string,
        large: string
    }
}

export interface IUsers {
    users:  {
        name: string,
        id: number,
        status: string,
        followed: boolean,
        photos: IUsersPhoto
    }
}

export interface IUsersTypes {
    users:  IUsers[],
    iconUserSrc: any,
    altImg: string,
    pageSize: number,
    usersCount: number,
    currentPage: number,
    buttonDisabled: boolean

}


interface ISetUsersAction {
    type: typeof SET_USERS,
    users: [],
    usersCount: number
}

interface IUnsubscribeAction {
    type: typeof UNSUBSCRIBE,
    userId: number
}

interface ISubscribeAction {
    type: typeof SUBSCRIBE,
    userId: number
}

export interface ICurrentPageAction {
    type: typeof SET_CURRENT_PAGE,
    currentPage : number
}

export interface IButtonDisabled  {
    type: typeof BUTTON_DISABLED,
    buttonDisabled : boolean
}

export type IUserAction = ISetUsersAction | IUnsubscribeAction | ISubscribeAction | ICurrentPageAction | IButtonDisabled ;




