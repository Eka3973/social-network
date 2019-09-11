import profileHeaderImg from "../images/profileHeaderImg.jpg";
import {reset} from 'redux-form';
import api from "../DAL/samuraiAPI"
import {
    ADD_MY_POST,
    CHANGE_PROFILE_PHOTO,
    IProfileState,
    ProfileActionType,
    SET_AUTH_FULL_PROFILE
} from "../Types/TypesProfile";
import {Dispatch} from "redux";

const imageChange = (previewImage: any, file: any) => ({type: CHANGE_PROFILE_PHOTO, previewImage, file});
export const addPost = (addedPost: any) => ({type: ADD_MY_POST, post: addedPost});

export const setAuthProfile = (aboutMe: any, photo: string, fullName: string, lookingForAJob: boolean,
                               lookingForAJobDescription: string, facebook: string, twitter: string,
                               youtube: string, github: string) =>
    ({
        type: SET_AUTH_FULL_PROFILE, photo, fullName, aboutMe, lookingForAJob,
        lookingForAJobDescription, facebook, twitter, youtube, github
    });


const initialState: IProfileState = {
    profileHeader: {
        profileImg: profileHeaderImg,
        profileAlt: 'programmer'
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
    previewImage: '',
    file: '',
    fullProfile:
        {
            aboutMe: '',
            contacts: {
                facebook: '',
                twitter: '',
                youtube: '',
                github: '',
            },
            lookingForAJob: true,
            lookingForAJobDescription: '',
            fullName: '',
            photo: ''
        }

};


const profileReducer = (state = initialState, action: ProfileActionType) => {

    switch (action.type) {
        case SET_AUTH_FULL_PROFILE: {
            return {
                ...state,
                fullProfile: {
                    ...state.fullProfile,
                    aboutMe: action.aboutMe,
                    photo: action.photo,
                    fullName: action.fullName,
                    lookingForAJob: action.lookingForAJob,
                    lookingForAJobDescription: action.lookingForAJobDescription,
                    contacts: {
                        ...state.fullProfile.contacts,
                        facebook: action.facebook,
                        twitter: action.twitter,
                        youtube: action.youtube,
                        github: action.github
                    }
                }
            };
        }
        case CHANGE_PROFILE_PHOTO:
            return {...state, previewImage: action.previewImage, file: action.file};

        case ADD_MY_POST:
            let addPost = {
                id: 4,
                postImg: state.fullProfile.photo,
                name: state.fullProfile.fullName,
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
    return (dispatch: Dispatch, getState: any) => {
        const userId = getState().auth.userInfo.userId;
        api.setFullUserProfile(userId)
            .then((data: any) => {
                dispatch(setAuthProfile(
                    data.aboutMe,
                    data.photos.small,
                    data.fullName,
                    data.lookingForAJob,
                    data.lookingForAJobDescription,
                    data.contacts.facebook,
                    data.contacts.twitter,
                    data.contacts.youtube,
                    data.contacts.github
                ));
            })
    }
};

export const getEditProfile = (userProfile: object) => {
    return (dispatch: Function) => {
        api.setEditProfile(userProfile)
            .then(() => {
                dispatch(getUserProfile());
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
        dispatch(reset('my-post-form'))
    }
};


export default profileReducer;