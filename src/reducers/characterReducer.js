const INITIAL_STATE = {
  user: '',
  character: '',
  level: null,
  hp: null,
  exp: null
};

import { CHARACTER_INFO } from '../actions';

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHARACTER_INFO:
      return { ...state, ...payload };
    default:
      return state;
  }
};
