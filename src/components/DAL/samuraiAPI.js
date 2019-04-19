import samuraiAPI from "./CreateInstance";


export const getFriends = () => {
    return samuraiAPI.get('users?count=100')
        .then(res => res.data.items);
};

export const getSubscribe =(userId) => {
    return samuraiAPI.post('follow/' + userId)
        .then(res => userId)


};
 export const getUnsubscribe = (userId) => {
     return samuraiAPI.delete('follow/' + userId)
         .then(res => userId)

 };

 // export const getLogin = (login, password, rememberMe) => {
 //     return samuraiAPI.post ('auth/login', {
 //         email: login,
 //         password: password,
 //         rememberMe: rememberMe
 //     }).then(res => res.data)
 // };