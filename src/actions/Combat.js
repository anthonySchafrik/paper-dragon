export const Get_Monster = 'Combat/Get_Monster';

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
