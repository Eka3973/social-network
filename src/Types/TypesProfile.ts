export const ADD_MY_POST = 'SN/MY_POSTS/ADD_MY_POST';
export const SET_AUTH_FULL_PROFILE = 'SN/AUTH/SET_AUTH_FULL_PROFILE';
export const CHANGE_PROFILE_PHOTO = 'SW/PAGE_CHANGE_PHOTO/CHANGE_PROFILE_PHOTO';

export interface IEditProfileForm {
    aboutMe: string
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: {
        github: string,
        vk: string,
        facebook: string,
        instagram: string,
        twitter: string,
        website: string,
        youtude: string,
        mainLink: string,
    }
}

export interface IProfileState {
    profileHeader: {
        profileImg: any,
        profileAlt: string
    },
    posts: object[],
    previewImage: string,
    file: any,
    fullProfile:
        {
            aboutMe: string,
            contacts: {
                facebook: string,
                twitter: string,
                youtube: string,
                github: string,
            },
            lookingForAJob: boolean,
            lookingForAJobDescription: string,
            fullName: string,
            photo: string
        }
}

interface IImageChange {
    type: typeof CHANGE_PROFILE_PHOTO,
    file: any,
    previewImage: string

}

interface IAddPost {
    type: typeof ADD_MY_POST,
    post: any

}

interface ISetAuthProfile {
    type: typeof SET_AUTH_FULL_PROFILE,
    aboutMe: any,
    photo: string,
    fullName: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    facebook: string,
    twitter: string,
    youtube: string,
    github: string
}

export type ProfileActionType = ISetAuthProfile | IAddPost | IImageChange;







