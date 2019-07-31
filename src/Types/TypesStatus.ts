export const ADD_STATUS = 'SW/PROFILE/ADD_STATUS';

export interface IStatus {
    status: string
}

export interface IStatusAction {
    type: typeof ADD_STATUS,
    status: string
}






