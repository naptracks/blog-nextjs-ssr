import axios from 'axios';
//redux
import {useStore} from '../helpers/store'
import {LOGOUT} from "../actions/types";
// next-auth
import {getSession} from 'next-auth/react'

// create axios model
export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const apiAuth = axios.create({
    baseURL: 'http://localhost:3000/api/auth/signin',
    headers: {
        'Content-Type': 'application/json'
    }
});

apiAuth.interceptors.response.use(
    res => res,
    err => {
        if (err.response.status === 401) {
            useStore().dispatch({ type: LOGOUT });
        }
        return Promise.reject(err);
    }
);


// apiAuth.interceptors.request.use(async (request) => {
//         const session = await getSession();
//         if (session) {
//             request.headers.Authorization = `Bearer ${session.jwt}`;
//         }
//         return request;
//     }
// );


