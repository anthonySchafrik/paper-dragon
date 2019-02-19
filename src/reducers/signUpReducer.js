const INITIAL_STATE = {
  userName: '',
  firstName: '',
  password: ''
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case 'SIGN_UP':
      return payLoad;
    default:
      return state;
  }
};
