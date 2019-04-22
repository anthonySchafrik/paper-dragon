import { CHARACTER_INFO, SELECTED_CHARACTER } from '../actions';

const INITIAL_STATE = {
  isSelected: false,
  selectedCharacter: {
    userId: null,
    character: '',
    level: null,
    hp: null,
    exp: null
  },
  createCharacter: {
    name: '',
    type: ''
  }
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  console.log('in the reducer');
  switch (type) {
    case CHARACTER_INFO:
      return { ...state, ...payload };
    case SELECTED_CHARACTER:
      return { ...state, selectedCharacter: { payload }, isSelected: true };
    default:
      return state;
  }
};
