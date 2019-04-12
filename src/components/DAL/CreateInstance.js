import * as axios from "axios";

const samuraiAPI = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
});

export default samuraiAPI;