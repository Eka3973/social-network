import {reset} from "redux-form";

export const ADD_MESSAGE = 'SW/MESSAGE/ADD_MESSAGE';

const initialState = {


    messages: [
        {
            id: 1,
            userImg: 'https://avatarko.ru/img/avatar/4/devushka_brunetka_3755.jpg',
            userAlt: 'Profile picture of Jill Smith',
            userMessage: 'You can perform an A/B test for your own analysis'
        },
        {
            id: 2,
            userImg: 'https://avatarko.ru/img/avatar/4/devushka_brunetka_3755.jpg',
            userAlt: 'Avatar of the author',
            userMessage: 'Some words are better than others'
        },
        {
            id: 3,
            userImg: 'https://avatarko.ru/img/avatar/18/devushka_platya_ulybka_17959.jpg',
            userAlt: 'Avatar of the author',
            userMessage: 'it\'s cool!!!'
        }

    ],
    addMyMessage: {
        myImg: 'https://avatarko.ru/img/avatar/4/devushka_brunetka_3755.jpg',
        myImgAlt: 'Profile picture of Jill Smith',
    }


};


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let addMessage = {
                id: 4,
                userImg: state.addMyMessage.myImg,
                userAlt: state.addMyMessage.myImgAlt,
                userMessage: action.comment
            };
            return {
                ...state,
                messages: [...state.messages, addMessage]
            };

        default:
            return state;
    }
};

export const clearForm = () => {
    return dispatch => {
        dispatch(reset('my-message'))
    }
};


export const addMessage = (addedMessage) =>
    ({type: ADD_MESSAGE, comment: addedMessage});


export default dialogsReducer;