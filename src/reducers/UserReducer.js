import { LOGIN, LOG_OUT } from '../actions';

const INITIAL_STATE = {
  userid: null,
  isLoggedIn: false
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return { ...state, ...payload };

    case LOG_OUT:
      return { ...INITIAL_STATE };

    default:
      return state;
  }
};
