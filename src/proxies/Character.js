import api from './api';

export function createCharacter(character) {
  return api.post('/characters', character);
}

export function fetchCharacters(userid) {
  return api.get('/characters', { params: { userid: userid } });
}
