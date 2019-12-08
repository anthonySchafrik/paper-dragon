import api from './api';

export function createUser(user) {
  return api.post('/user', user);
}

export function userLogIn(user) {
  return api.get('user/login', {
    params: {
      ...user
    }
  });
}
