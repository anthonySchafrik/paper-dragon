import { CHARACTER_INFO, SELECTED_CHARACTER } from '../actions';

const INITIAL_STATE = {
  isSelected: false,
  selectedCharacter: {
    userId: NaN,
    character: '',
    level: NaN,
    hp: NaN,
    exp: NaN
  },
  createCharacter: {
    name: '',
    type: ''
  }
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHARACTER_INFO:
      return { ...state, ...payload };
    case SELECTED_CHARACTER:
      return {
        ...state,
        selectedCharacter: { ...payload.character },
        isSelected: true
      };
    default:
      return state;
  }
};
