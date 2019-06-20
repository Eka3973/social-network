import profileHeaderImg from "../images/profileHeaderImg.jpg";
import {reset} from 'redux-form';
import api from "../DAL/samuraiAPI";

export const ADD_MY_POST = 'SN/MY_POSTS/ADD_MY_POST';
const SET_AUTH_FULL_PROFILE = 'SN/AUTH/SET_AUTH_FULL_PROFILE';
const CHANGE_PROFILE_PHOTO = 'SW/PAGE_CHANGE_PHOTO/CHANGE_PROFILE_PHOTO';


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
            'https://twitter.com/BuddyBossWP',
        userName: ""
    },

    posts: [
        {
            id: 1,
            postImg: 'https://avatarko.ru/img/avatar/13/serial_12297.jpg',
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
    photo: '',
    fullName: '',
    aboutMe: '',
    previewImage: '',
    file: '',


};


const profileReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case SET_AUTH_FULL_PROFILE: {
            return {
                ...state,
                photo: action.photo,
                fullName: action.fullName,
                aboutMe: action.aboutMe

            };
        }

        case CHANGE_PROFILE_PHOTO:
            return {...state, previewImage: action.previewImage, file: action.file};

        case ADD_MY_POST:
                let addPost = {
                    id: 4,
                    postImg: state.photo,
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

        default:
            return state;
    }
};

export const getUserProfile = () => {
    return (dispatch: any, getState: any) => {
        let userId = getState().auth.userInfo.userId;
        api.setFullUserProfile(userId)
            .then((data: any) => {
                dispatch(setAuthProfile(
                    data.photos.small,
                    data.fullName,
                    data.aboutMe

                ))
            })
    }
};

export const setImageChange = (file: any) => {
    return (dispatch: Function) => {
        let reader = new FileReader();
        reader.onloadend = () => {
            dispatch(imageChange(reader.result, file));
        };
        reader.readAsDataURL(file);

    };
};

export const getUrlPhotoToProfile = (file: any) => {
    return (dispatch: Function) => {
        api.setChangePhoto(file)
            .then(() => {
                dispatch(getUserProfile());

            });
    }
};

 export const clearForm = () => {
     return (dispatch: Function) => {
    dispatch(reset('my-post-form'))}
};


export const addPost = (addedPost: any) => ({type: ADD_MY_POST, post: addedPost});
export const setAuthProfile = (photo: string, fullName: string, aboutMe: string) => ({type: SET_AUTH_FULL_PROFILE, photo, fullName, aboutMe});
const imageChange = (previewImage: any, file: any) => ({type: CHANGE_PROFILE_PHOTO, previewImage, file});


export default profileReducer;