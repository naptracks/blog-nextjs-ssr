import axios from 'axios';

// create axios model
const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api