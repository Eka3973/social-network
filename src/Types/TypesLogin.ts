

export const SET_STATUS = 'SN/LOGIN/SET_STATUS';
export const SET_MESSAGE = 'SN/LOGIN/SET_MESSAGE';

export interface ILoginForm {
    login: string,
    password: string,
    remember: boolean
}

export interface ILoginState {
    message: []
    status: any
}

interface IMessageAction {
    type: typeof SET_MESSAGE,
    message: []
}

interface IStatusAction {
    type: typeof SET_STATUS,
    status: any
}

export type ILoginAction = IMessageAction | IStatusAction;




