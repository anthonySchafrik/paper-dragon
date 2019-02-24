import { LOGIN } from '../actions';

const INITIAL_STATE = {
  username: '',
  password: '',
  userid: null
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return { ...state, ...payload };
    default:
      return state;
  }
};
