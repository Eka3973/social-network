import axios from 'axios';

const samuraiAPI = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ffe1df7b-2799-42db-8ee2-7e0282ce7cd8'
    }
});

export default samuraiAPI;