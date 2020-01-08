import {
  GET_MONSTER,
  ATTACK_TYPE,
  ATTACK,
  MONSTER_ATTACK_TEXT
} from '../actions/Combat';

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
  },
  monsterAttackText: []
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  const { monsterAttackText } = state;

  switch (type) {
    case GET_MONSTER:
      return { ...state, monster: payload };

    case ATTACK_TYPE:
      return { ...state, attackType: payload };

    case ATTACK:
      return { ...state, attack: payload };

    // case ATTACK_OPTIONS:
    //   return { ...state, attackOption: payload };

    case MONSTER_ATTACK_TEXT:
      return { ...state, monsterAttackText: [...monsterAttackText, payload] };

    default:
      return state;
  }
};
