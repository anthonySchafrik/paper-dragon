import api from './api';

export const GetAMonster = () => {
  console.log('fired');

  return { ...{ data: 'mon' } };
  // return api.get('/monster');
};
