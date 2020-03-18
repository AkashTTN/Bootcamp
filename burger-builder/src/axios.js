import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://akashttn-burger-builder-server.firebaseio.com'
});

export default instance;