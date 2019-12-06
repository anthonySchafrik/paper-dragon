import api from './api';

export function createCharacter(character) {
  return api.post('./createCharacter', character);
}

export function fetchCharacters(userid) {
  return api.get('/characters', { params: { userid: userid } });
}
