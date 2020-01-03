import { Get_Monster, ATTACK_TYPE, ATTACK } from '../actions/Combat';

const INITIAL_STATE = {
  monster: {
    type: 'none',
    element: 'none',
    moves: [
      [
        'no attach',
        {
          low: 0,
          high: 0
        }
      ]
    ]
  },
  attackType: 'none selected',
  attack: '',
  options: {
    melee: [{ name: 'auto attack', high: 3, low: 0 }],
    magic: [],
    items: [],
    none: []
  }
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case Get_Monster:
      return { ...state, monster: payload };

    case ATTACK_TYPE:
      return { ...state, attackType: payload };

    case ATTACK:
      return { ...state, attack: payload };

    // case ATTACK_OPTIONS:
    //   return { ...state, attackOption: payload };

    default:
      return state;
  }
};
