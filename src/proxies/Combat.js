import api from './api';

export const GetAMonster = () => {
  return api.get('/monster');
};
