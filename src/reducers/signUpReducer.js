import { SIGN_UP } from '../actions';

const INITIAL_STATE = {
  userName: '',
  firstName: '',
  password: ''
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGN_UP:
      return { ...payload };
    default:
      return state;
  }
};
