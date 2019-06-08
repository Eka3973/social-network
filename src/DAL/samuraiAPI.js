import samuraiAPI from "./CreateInstance";

const api = {
    getUsers: () => {
        return samuraiAPI.get('users?count=80')
            .then(res => res.data.items);
    },

    getSubscribe: (userId) => {
        return samuraiAPI.post('follow/' + userId)
            .then(res => userId)


    },
    getUnsubscribe: (userId) => {
        return samuraiAPI.delete('follow/' + userId)
            .then(res => userId)

    },

    makeLogin: (login, password, rememberMe) => {
        return samuraiAPI.post('auth/login', {
            email: login,
            password: password,
            rememberMe: rememberMe
        }).then(res => res);
    },

    getLogout: () => {
        return samuraiAPI.post('auth/logout')
    },


    getMe: () => {
        return samuraiAPI.get('auth/me')
    },
    getFullUserProfile: (userId) => {
        return samuraiAPI.get('profile/' + userId)
    },

    getChangePhoto: (file) => {
        const formData = new FormData();
        formData.append('image', file);
        return samuraiAPI.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/from-data'
            }
        }).then(res => res);
    },

    getProfileStatus: (userId) => {
        return samuraiAPI.get('profile/status/' + userId)
    },

    getNewProfileStatus: (status) => {
        return samuraiAPI.put('profile/status', {
            status: status
        }).then(res => res);
    }

};


export default api;



