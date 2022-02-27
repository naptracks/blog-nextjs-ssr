import api from './api';

const setAuthToken = token => {
  if (token) {
    api.defaults.headers.common['x-auth-token'] = token;
    document.localStorage.setItem('token', token);
  } else {
    delete api.defaults.headers.common['x-auth-token'];
    document.localStorage.removeItem('token');
  }
};

export default setAuthToken;
