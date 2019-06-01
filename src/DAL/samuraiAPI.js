import samuraiAPI from "./CreateInstance";


export const getUsers = () => {
    return samuraiAPI.get('users?count=80')
        .then(res => res.data.items);
};

export const getSubscribe = (userId) => {
    return samuraiAPI.post('follow/' + userId)
        .then(res => userId)


};
export const getUnsubscribe = (userId) => {
    return samuraiAPI.delete('follow/' + userId)
        .then(res => userId)

};

export const makeLogin = (login, password, rememberMe) => {
    return samuraiAPI.post('auth/login', {
        email: login,
        password: password,
        rememberMe: rememberMe
    }).then(res => res);
};

export const getLogout = () => {
    return samuraiAPI.post('auth/logout')
};

export const getMe = () => {
    return samuraiAPI.get('auth/me')
};

export const getFullUserProfile = () => {
    return samuraiAPI.get('profile/1034')
};

const api = {
    getFullUserProfile: (userId) => {
        return samuraiAPI.get('profile/' + userId)
    }
}

export default api;

export const getChangePhoto = (file) => {
    const formData = new FormData();
    formData.append('image', file);
    return samuraiAPI.put('profile/photo', formData, {
        headers: {
            'Content-Type': 'multipart/from-data'
        }
    }).then(res => res);
};

