export const Get_Monster = 'Combat/Get_Monster';
export const ATTACK_TYPE = 'Combat/ATTACK_TYPE';

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
