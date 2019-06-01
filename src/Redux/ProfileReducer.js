import profileHeaderImg from "../images/profileHeaderImg.jpg";

import api from "../DAL/samuraiAPI";

export const ADD_MY_POST = 'SN/MY_POSTS/ADD_MY_POST';
const SET_AUTH_FULL_PROFILE = 'SN/AUTH/SET_AUTH_FULL_PROFILE';

const initialState = {
    profileHeader: {
        profileImg: profileHeaderImg,
        profileAlt: 'programmer'
    },

    description: {
        descriptionAlt:
            'Avatar picture of profile',
        niceName:
            '@jillsmith',
        dateOfBirth:
            '15 July',
        city:
            'New York',
        education:
            'New York University',
        Twitter:
            'https://twitter.com/BuddyBossWP'
    }
    ,
    myPosts: {
        titlePost: 'My posts',
        placeholderPost:
            'Your news...'
    }
    ,
    posts: [
        {
            id: 1,
            postImg: 'https://avatarko.ru/img/avatar/18/muzhchina_muzyka_gitara_17753.jpg',
            postAlt: 'Profile picture of Jon Greene',
            name: 'Curtis Lynch',
            itemPost: 'How do you plan to integrate this in your upcoming strategy?',
            like: 'like',
            counter: 23
        },
        {
            id: 2,
            postImg: 'https://avatarko.ru/img/avatar/13/serial_12297.jpg',
            postAlt: 'Profile picture of Curtis Lynch',
            name: 'Jon Greene',
            itemPost: 'You can perform an A/B test for your own analysis?',
            like: 'like',
            counter: 16
        },
        {
            id: 3,
            postImg: 'https://avatarko.ru/img/avatar/18/devushka_platya_ulybka_17959.jpg',
            postAlt: 'Profile picture of Jessica Sanders',
            name: 'Jessica',
            itemPost: 'Incidunt sequi dolorem ea sint!Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            like: 'like',
            counter: 38
        }],
    photo: null,
    fullName:''


};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_FULL_PROFILE: {
            return {...state,
                photo: action.photo,
                fullName: action.fullName

            };
        }
        case ADD_MY_POST:
            if (!!action.post.trim()) {
                let addPost = {
                    id: 4,
                    postImg: state.description.descriptionImg,
                    postAlt: state.description.descriptionAlt,
                    name: state.description.userName,
                    itemPost: action.post,
                    like: 'like',
                    counter: 0,
                };
                return {
                    ...state,
                    posts: [addPost, ...state.posts]
                };
            }
            return state;

        default:
            return state;
    }
};

export const setProfileId = () => {
    return (dispatch, getState) => {
        let userId = getState().auth.userInfo.userId;
        api.getFullUserProfile(userId)
            .then(res => {
                dispatch(setAuthAvatar(res.data.photos.small, res.data.fullName))
            })
    }
};


export const addPost = (addedPost) =>({type: ADD_MY_POST, post: addedPost});
export const setAuthAvatar = (photo, fullName) => ({type: SET_AUTH_FULL_PROFILE, photo, fullName});


export default profileReducer;