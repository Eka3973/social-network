export const ADD_MESSAGE = 'SW/MESSAGE/ADD_MESSAGE';

export interface IAddMessageAction {
    type: typeof ADD_MESSAGE,
    comment: object
}

export interface IMessagesState {
    messages: object[]
    addMyMessage: {
        myImg: string,
        myImgAlt: string
    }
}


