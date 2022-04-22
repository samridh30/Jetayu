import axios from 'axios';

const springBootAppUrl = `http://localhost:8088/`;

const registerService = (appUser) => {
        console.log(appUser);
        return axios.post(`${springBootAppUrl}Customer/register`, appUser);
}

const loginService = (appUser) => {
        console.log(appUser);
        let temp = axios.post(`${springBootAppUrl}Customer/login`, appUser);
        console.log(temp)
        return temp;
}

export { registerService, loginService };