import samuraiAPI from "./CreateInstance";
import {IUserId, IUsersTypes} from "../Types/TypesUsers";
import {IUserInfoType} from "../Types/TypesAuth";
import {IStatus} from "../Types/TypesStatus";
import {ILoginForm} from "../Types/TypesLogin";

const api = {
    setUsers: (pageSize: IUsersTypes, currentPage: IUsersTypes) => {
        return samuraiAPI.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((res) => res.data);
    },

    setSubscribe: (userId: IUserId) => {
        return samuraiAPI.post('follow/' + userId)
            .then((res) => userId)


    },
    setUnsubscribe: (userId: IUserId) => {
        return samuraiAPI.delete('follow/' + userId)
            .then((res) => userId)

    },

    makeLogin: (login: ILoginForm, password: ILoginForm, rememberMe: ILoginForm) => {
        return samuraiAPI.post('auth/login', {
            email: login,
            password: password,
            rememberMe: rememberMe
        }).then((res) => res.data);
    },

    setLogout: () => {
        return samuraiAPI.post('auth/logout')
            .then((res) => res.data.resultCode);
    },


    setMe: () => {
        return samuraiAPI.get('auth/me')
            .then((res) => res.data);
    },

    setFullUserProfile: (userId: string) => {
        return samuraiAPI.get('profile/' + userId)
            .then((res: any) => res.data);
    },

    setEditProfile: (userProfile: object) => {
        return samuraiAPI.put('profile', userProfile)
    },

    setChangePhoto: (file: any) => {
        const formData = new FormData();
        formData.append('image', file);
        return samuraiAPI.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/from-data'
            }
        })
    },

    getProfileStatus: (userId: IUserInfoType) => {
        return samuraiAPI.get('profile/status/' + userId)
            .then((res) => res.data)
    },

    getNewProfileStatus: (status: IStatus) => {
        return samuraiAPI.put('profile/status', {
            status: status
        }).then((res) => res);
    }

};


export default api;



