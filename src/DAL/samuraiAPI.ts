import samuraiAPI from "./CreateInstance";

const api = {
    setUsers: (pageSize = 80) => {
        return samuraiAPI.get(`users?count=${pageSize}`)
            .then((res: any) => res.data.items);        //checked
    },

    setSubscribe: (userId: string) => {
        return samuraiAPI.post('follow/' + userId)
            .then((res: any) => userId)              //checked


    },
    setUnsubscribe: (userId: string) => {
        return samuraiAPI.delete('follow/' + userId)
            .then((res: any) => userId)              //checked

    },

    makeLogin: (login: string, password: string, rememberMe: boolean) => {
        return samuraiAPI.post('auth/login', {
            email: login,
            password: password,
            rememberMe: rememberMe
        }).then((res: any) => res.data);             //checked
    },

    setLogout: () => {
        return samuraiAPI.post('auth/logout')
            .then((res: any) => res.data.resultCode);
    },                                                           //checked


    setMe: () => {
        return samuraiAPI.get('auth/me')
            .then((res: any) => res.data);               //checked
    },

    setFullUserProfile: (userId: string) => {
        return samuraiAPI.get('profile/' + userId)
            .then((res: any) => res.data);               //checked
    },

    setChangePhoto: (file: any) => {
        const formData = new FormData();
        formData.append('image', file);
        return samuraiAPI.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/from-data'
            }                                                         //checked
        })
    },

    getProfileStatus: (userId: string) => {
        return samuraiAPI.get('profile/status/' + userId)
            .then((res:any)=> res.data)                      //checked
    },

    getNewProfileStatus: (status: string) => {
        return samuraiAPI.put('profile/status', {
            status: status
        }).then((res: any) => res);                            //checked
    }

};


export default api;



