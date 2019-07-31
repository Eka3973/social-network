
export const SET_USERS = 'SN/USERS/SET_USERS';
export const UNSUBSCRIBE = 'SN/USERS/UNSUBSCRIBE';
export const SUBSCRIBE = 'SN/USERS/SUBSCRIBE';

export interface IuserId {
    userId: number
}

export interface IusersPhoto {
    photos: {
        small: string,
        large: string
    }
}

export interface Iusers {
    users:  {
        name: string,
        id: number,
        status: string,
        followed: boolean,
        photos: IusersPhoto
    }
}

export interface IUsersTypes {
    users:  Iusers[],
    iconUserSrc: any,
    altImg: string,
    path: string
}


interface IsetUsersAction {
    type: typeof SET_USERS,
    users: []
}

interface IunsubscribeAction {
    type: typeof UNSUBSCRIBE,
    userId: number
}

interface IsubscribeAction {
    type: typeof SUBSCRIBE,
    userId: number
}
export type IuserAction = IsetUsersAction | IunsubscribeAction | IsubscribeAction;




