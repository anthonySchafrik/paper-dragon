import api from './api';

export const createCharacter = character => {
  return api.post('/characters', character);
};

export const fetchCharacters = userid => {
  return api.get('/characters', { params: { userid: userid } });
};
