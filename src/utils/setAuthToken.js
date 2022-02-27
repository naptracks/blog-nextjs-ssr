import {apiAuth} from './api';

const setAuthToken = token => {
  if (token) {
    apiAuth.defaults.headers.common['x-auth-token'] = token;
    document.localStorage.setItem('token', token);
  } else {
    delete apiAuth.defaults.headers.common['x-auth-token'];
    document.localStorage.removeItem('token');
  }
};

export default setAuthToken;
