import api from './api';

export function userLogIn(user) {
  return api.get('user/login', {
    params: {
      ...user
    }
  });
}
