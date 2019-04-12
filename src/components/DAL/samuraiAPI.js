import samuraiAPI from "./CreateInstance";


export const getFriends = () => {
    return samuraiAPI.get('users?count=100')
        .then(res => res.data.items);
};

export const getSubscribe =(userId) => {
    return samuraiAPI.post('follow/' + userId)
        .then(res => userId)


};
// .catch((response) => {
// //     if (response.response.status === 401) {
// //         alert("Нет прав доступа. Пройдите авторизацию")
// //     }