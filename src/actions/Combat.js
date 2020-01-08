export const GET_MONSTER = 'Combat/GET_MONSTER';
export const ATTACK_TYPE = 'Combat/ATTACK_TYPE';
export const ATTACK = 'Combat/ATTACK';
export const ATTACK_OPTIONS = 'Combat/ATTACK_OPTIONS';
export const MONSTER_ATTACK_TEXT = 'Combat/MONSTER_ATTACK_TEXT';

import { GetAMonster } from '../proxies/Combat';

export const GetRanMon = () => {
  return async dispatch => {
    const mon = await GetAMonster();

    const { data } = mon;

    dispatch({
      type: GET_MONSTER,
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

export const monsterAttackText = (attack, damg) => {
  return {
    type: MONSTER_ATTACK_TEXT,
    payload: `Monster attacks with ${attack} for ${damg} damage`
  };
};
