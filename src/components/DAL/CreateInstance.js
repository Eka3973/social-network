import * as axios from "axios";

const samuraiAPI = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    // baseURL: 'http://localhost:54463/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ba531106-9803-454e-8b2a-0a6829608eb1'
    }
});

export default samuraiAPI;