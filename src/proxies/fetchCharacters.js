import api from './api';

export function fetchCharacters(user) {
  console.log(user);
  return api.get('/characters', { params: { ...user } });
}
