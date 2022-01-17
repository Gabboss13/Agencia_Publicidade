import axios from 'axios';

const api = axios.create({
    baseURL: 'https://advertising-agency-clients.herokuapp.com'
});

export default api;