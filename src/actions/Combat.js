export const Get_Monster = 'Combat/Get_Monster';
export const ATTACK_TYPE = 'Combat/ATTACK_TYPE';
export const ATTACK = 'Combat/ATTACK';
export const ATTACK_OPTIONS = 'Combat/ATTACK_OPTIONS';

import { GetAMonster } from '../proxies/Combat';

export const GetRanMon = () => {
  return async dispatch => {
    const mon = await GetAMonster();

    const { data } = mon;

    dispatch({
      type: Get_Monster,
      payload: data
    });
  };
};

export const attackType = type => {
  return {
    type: ATTACK_TYPE,
    payload: type
  };
};

export const attackMove = attack => {
  return {
    type: ATTACK,
    payload: attack
  };
};

// export const attackOptions = options => {
//   return {
//     type: ATTACK_OPTIONS,
//     payload: options
//   };
// };
