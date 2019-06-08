// import envelopeImg from "../images/envelope.svg";
// import homeImg from "../images/home.svg";
// import musicImg from "../images/music.svg";
// import newsImg from "../images/news.svg";
// import settingsImg from "../images/settings.svg";
//import profileHeaderImg from "../images/profileHeaderImg.jpg"

// const store = {
//         _state: {
//
//             // contactList: [],
//             // navBarPage: [
//             //     {
//             //         id: 1,
//             //         path: "/profile",
//             //         pageName: 'Profile',
//             //         iconSrc: homeImg,
//             //         iconAlt: 'Icon home'
//             //     },
//             //     {
//             //         id: 2,
//             //         path: "/dialogs",
//             //         pageName: 'Messages',
//             //         iconSrc: envelopeImg,
//             //         iconAlt: 'Icon envelope'
//             //     },
//             //     {
//             //         id: 3,
//             //         path: "/news",
//             //         pageName: 'ProfileTop',
//             //         iconSrc: newsImg,
//             //         iconAlt: 'Icon new'
//             //     },
//             //     {
//             //         id: 4,
//             //         path: "/music",
//             //         pageName: 'Members',
//             //         iconSrc: musicImg,
//             //         iconAlt: 'Icon music'
//             //     },
//             //     {
//             //         id: 5,
//             //         path: "/settings",
//             //         pageName: 'ChangeStatus',
//             //         iconSrc: settingsImg,
//             //         iconAlt: 'Icon  settings'
//             //
//             //     }
//             // ],
//             // sideBarPage: {
//             //     sideBarTitle: 'Members',
//             //     sideBarFriend: [
//             //         {
//             //             id: 1,
//             //             friendImg: 'https://avatarko.ru/img/avatar/18/devushka_platya_ulybka_17959.jpg',
//             //             friendAlt: 'My friend\'s avatar',
//             //             friendName: 'Jessica',
//             //             friendSurname: 'Sanders'
//             //
//             //         },
//             //         {
//             //             id: 2,
//             //             friendImg: 'https://avatarko.ru/img/avatar/13/serial_12297.jpg',
//             //             friendAlt: 'My friend\'s avatar',
//             //             friendName: 'Jon',
//             //             friendSurname: 'Greene'
//             //         },
//             //         {
//             //             id: 3,
//             //             friendImg: 'https://avatarko.ru/img/avatar/18/muzhchina_muzyka_gitara_17753.jpg',
//             //             friendAlt: 'My friend\'s avatar',
//             //             friendName: 'Curtis',
//             //             friendSurname: 'Lynch'
//             //         }
//             //     ]
//             // },
//             // profilePage: {
//             //     profileHeader: {
//             //         profileImg: profileHeaderImg,
//             //         profileAlt: 'programmer'
//             //     },
//             //
//             //     description: {
//             //         descriptionImg: 'https://avatarko.ru/img/avatar/4/devushka_brunetka_3755.jpg',
//             //         descriptionAlt:
//             //             'Profile picture of Jill Smith',
//             //         userName:
//             //             'Jill Smith,',
//             //         niceName:
//             //             '@jillsmith',
//             //         dateOfBirth:
//             //             '15 July',
//             //         city:
//             //             'New York',
//             //         education:
//             //             'New York University',
//             //         Twitter:
//             //             'https://twitter.com/BuddyBossWP'
//             //     }
//             //     ,
//             //     myPosts: {
//             //         titlePost: 'My posts',
//             //         placeholderPost:
//             //             'Your news...',
//             //         buttonPost:
//             //             'Add post',
//             //
//             //     }
//             //     ,
//             //     post: [
//             //         {
//             //             id: 1,
//             //             postImg: 'https://avatarko.ru/img/avatar/18/muzhchina_muzyka_gitara_17753.jpg',
//             //             postAlt: 'Profile picture of Jon Greene',
//             //             itemPost: 'How do you plan to integrate this in your upcoming strategy?',
//             //             like: 'like',
//             //             counter: 23
//             //         },
//             //         {
//             //             id: 2,
//             //             postImg: 'https://avatarko.ru/img/avatar/13/serial_12297.jpg',
//             //             postAlt: 'Profile picture of Curtis Lynch',
//             //             itemPost: 'You can perform an A/B test for your own analysis?',
//             //             like: 'like',
//             //             counter: 16
//             //         },
//             //         {
//             //             id: 3,
//             //             postImg: 'https://avatarko.ru/img/avatar/18/devushka_platya_ulybka_17959.jpg',
//             //             postAlt: 'Profile picture of Jessica Sanders',
//             //             itemPost: 'Incidunt sequi dolorem ea sint!Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
//             //             like: 'like',
//             //             counter: 38
//             //         }],
//             //     newPostText: ""
//             //
//             // },
//             // dialogsPage: {
//             //     dialogsUsers: [
//             //         {
//             //             id: 1,
//             //             path: '/dialogs',
//             //             userImg: 'https://avatarko.ru/img/avatar/18/devushka_platya_ulybka_17959.jpg',
//             //             userAlt: 'Avatar of the author',
//             //             userName: 'Jessica Sanders',
//             //         },
//             //
//             //         {
//             //             id: 2,
//             //             path: '/dialogs',
//             //             userImg: 'https://avatarko.ru/img/avatar/18/muzhchina_muzyka_gitara_17753.jpg',
//             //             userAlt: 'Avatar of the author',
//             //             userName: 'Jon Greene',
//             //         },
//             //         {
//             //             id: 3,
//             //             path: '/dialogs',
//             //             userImg: 'http://avatarki.tomsk.ru/img/3/3_923_100_.jpg',
//             //             userAlt: 'Avatar of the author',
//             //             userName: 'Bryan Hicks'
//             //         },
//             //         {
//             //             id: 4,
//             //             path: '/dialogs',
//             //             userImg: 'https://avatarko.ru/img/avatar/13/serial_12297.jpg',
//             //             userAlt: 'Avatar of the author',
//             //             userName: 'Curtis Lynch'
//             //         },
//             //         {
//             //             id: 5,
//             //             path: '/dialogs',
//             //             userImg: 'http://avatarki.tomsk.ru/img/28/28_1778_100_2_.jpg',
//             //             userAlt: 'Avatar of the author',
//             //             userName: 'John'
//             //         },
//             //         {
//             //             id: 6,
//             //             path: '/dialogs',
//             //             userImg: 'http://avatarki.tomsk.ru/img/27/27_159_100_.jpg',
//             //             userAlt: 'Avatar of the author',
//             //             userName: 'Dale Schmidt'
//             //         },
//             //         {
//             //             id: 7,
//             //             path: '/dialogs',
//             //             userImg: 'http://avatarki.tomsk.ru/img/28/28_4337_100_2_.jpg',
//             //             userAlt: 'Avatar of the author',
//             //             userName: 'BuddyBoss'
//             //         },
//             //         {
//             //             id: 8,
//             //             path: '/dialogs',
//             //             userImg: 'https://avatarko.ru/img/avatar/5/devushka_4426.jpg',
//             //             userAlt: 'Avatar of the author',
//             //             userName: 'Julie Lawrence'
//             //         }
//             //     ],
//             //     message: [
//             //         {
//             //             id: 1,
//             //             userImg: 'https://avatarko.ru/img/avatar/18/devushka_platya_ulybka_17959.jpg',
//             //             userAlt: 'Avatar of the author',
//             //             userMessage: 'You can perform an A/B test for your own analysis'
//             //         },
//             //         {
//             //             id: 2,
//             //             userImg: 'https://avatarko.ru/img/avatar/4/devushka_brunetka_3755.jpg',
//             //             userAlt: 'Avatar of the author',
//             //             userMessage: 'Some words are better than others'
//             //         },
//             //         {
//             //             id: 3,
//             //             userImg: 'https://avatarko.ru/img/avatar/18/devushka_platya_ulybka_17959.jpg',
//             //             userAlt: 'Avatar of the author',
//             //             userMessage: 'it\'s cool!!!'
//             //         }
//             //
//             //     ],
//             //     placeholderMessages: 'Your message...',
//             //     newMessageText: ""
//             // }
// //         },
// //         getState() {
// //             return this._state;
// //         },
// //
// //         _callSubscriber() {
// //         },
// //
// //         subscribe(observer) {
// //             this._callSubscriber = observer;
// //         },
// //         dispatch(action) {
// //             switch (action.type) {
// //                 case ADD_MY_POST:
// //                     if (action.post.trim() !== "") {    //уточнить проверку на пробелы
// //                         let addPost = {
// //                             id: 4,
// //                             postImg: this._state.profilePage.description.descriptionImg,   //уточнить правильно ли !!!!
// //                             postAlt: this._state.profilePage.description.descriptionAlt,
// //                             itemPost: this._state.profilePage.newPostText,
// //                             like: 'like',
// //                             counter: 0,
// //
// //                         };
// //                         this._state.profilePage.post.unshift(addPost);
// //                         this._state.profilePage.newPostText = '';
// //                         this._callSubscriber();
// //                     }
// //                     break;
// //
// //                 case UPDATE_NEW_POST_TEXT:
// //                     this._state.profilePage.newPostText = action.newText;
// //                     this._callSubscriber();
// //                     break;
// //
// //                 case ADD_MESSAGE:
// //                     if (action.comment.trim() !== '') {
// //                         let addMessage = {
// //                             id: 4,
// //                             userImg: this._state.profilePage.description.descriptionImg,
// //                             userAlt: this._state.profilePage.description.descriptionAlt,
// //                             userMessage: this._state.dialogsPage.newMessageText,
// //                         };
// //                         this._state.dialogsPage.message.push(addMessage);
// //                         this._state.dialogsPage.newMessageText = '';
// //                         this._callSubscriber();
// //                     }
// //                     break;
// //                 case UPDATE_NEW_MESSAGE_TEXT:
// //                     this._state.dialogsPage.newMessageText = action.newUserText;
// //                     this._callSubscriber();
// //                     break;
// //                 default:
// //                     break;
// //             }
// //         }
// //     };
// //
// // export const ADD_MY_POST = 'SN/MYPOST/ADD_MY_POST';
// // export const UPDATE_NEW_POST_TEXT = 'SN/MYPOST/UPDATE_NEW_POST_TEXT';
// // export const UPDATE_NEW_MESSAGE_TEXT = 'SN/ADDMESSAGE/UPDATE_NEW_MESSAGE_TEXT';
// // export const ADD_MESSAGE = 'SN/ADDMESSAGE/ADD_COMMENT';
// // export default store;