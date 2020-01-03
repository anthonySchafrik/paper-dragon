import api from './api';

export const createUser = user => {
  return api.post('/user', user);
};

export const userLogIn = user => {
  return api.get('user/login', {
    params: {
      ...user
    }
  });
};
