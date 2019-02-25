import api from './api';

export function fetchCharacters(userid) {
  return api.get('/characters', { params: { userid: userid } });
}
