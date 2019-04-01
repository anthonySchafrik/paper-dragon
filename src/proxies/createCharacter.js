import api from './api';

export function createCharacter(character) {
  return api.post('./createCharacter', character);
}
