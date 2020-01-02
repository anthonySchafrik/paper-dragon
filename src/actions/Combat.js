export const Get_Monster = 'Combat/Get_Monster';

export const GetRanMon = () => {
  const mon = { data: { key: 'testing' } };

  const { data } = mon;

  return dispatch => {
    dispatch({
      type: Get_Monster,
      payload: data
    });
  };
};
