import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://h1data-explore.firebaseio.com/'
});

export default instance;