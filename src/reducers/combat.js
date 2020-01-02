import { Get_Monster } from '../actions/Combat';

const INITIAL_STATE = {
  Monster: {}
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case Get_Monster:
      return { ...state, Monster: payload };

    default:
      return state;
  }
};
