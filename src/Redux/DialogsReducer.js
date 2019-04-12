export const ADD_MESSAGE = 'SW/MESSAGE/ADD_MESSAGE';
export const UPDATE_NEW_MESSAGE_TEXT = 'SW/MESSAGE/UPDATE_NEW_MESSAGE_TEXT';

const initialState = {

    dialogsUsers: [
        {
            id: 1,
            path: '/dialogs',
            userImg: 'https://avatarko.ru/img/avatar/18/devushka_platya_ulybka_17959.jpg',
            userAlt: 'Avatar of the author',
            userName: 'Jessica Sanders',
        },

        {
            id: 2,
            path: '/dialogs',
            userImg: 'https://avatarko.ru/img/avatar/18/muzhchina_muzyka_gitara_17753.jpg',
            userAlt: 'Avatar of the author',
            userName: 'Jon Greene',
        },
        {
            id: 3,
            path: '/dialogs',
            userImg: 'http://avatarki.tomsk.ru/img/3/3_923_100_.jpg',
            userAlt: 'Avatar of the author',
            userName: 'Bryan Hicks'
        },
        {
            id: 4,
            path: '/dialogs',
            userImg: 'https://avatarko.ru/img/avatar/13/serial_12297.jpg',
            userAlt: 'Avatar of the author',
            userName: 'Curtis Lynch'
        },
        {
            id: 5,
            path: '/dialogs',
            userImg: 'http://avatarki.tomsk.ru/img/28/28_1778_100_2_.jpg',
            userAlt: 'Avatar of the author',
            userName: 'John'
        },
        {
            id: 6,
            path: '/dialogs',
            userImg: 'http://avatarki.tomsk.ru/img/27/27_159_100_.jpg',
            userAlt: 'Avatar of the author',
            userName: 'Dale Schmidt'
        },
        {
            id: 7,
            path: '/dialogs',
            userImg: 'http://avatarki.tomsk.ru/img/28/28_4337_100_2_.jpg',
            userAlt: 'Avatar of the author',
            userName: 'BuddyBoss'
        },
        {
            id: 8,
            path: '/dialogs',
            userImg: 'https://avatarko.ru/img/avatar/5/devushka_4426.jpg',
            userAlt: 'Avatar of the author',
            userName: 'Julie Lawrence'
        }
    ],
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
    },
    placeholderMessage: 'Your message...',
    newMessageText: ""
};


const dialogsReducer = (state = initialState, action) => {
    let copyState;
    switch (action.type) {
        case ADD_MESSAGE:
            if (action.comment.trim() !== '') {
                let addMessage = {
                    id: 4,
                    userImg: state.addMyMessage.myImg,
                    userAlt: state.addMyMessage.myImgAlt,
                    userMessage: state.newMessageText,
                };
                copyState = {
                    ...state,
                    messages: [...state.messages, addMessage]
                };
                copyState.newMessageText = '';
                return copyState;
            }
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            copyState = {...state};
            copyState.newMessageText = action.newComment;

            return copyState;
        default:
            return state;
    }
};
export const updateNewMessageActionCreator = (enteredTextMessage) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newComment: enteredTextMessage});

export const addMessageActionCreator = (addedMessage) =>
    ({type: ADD_MESSAGE, comment: addedMessage});


export default dialogsReducer;