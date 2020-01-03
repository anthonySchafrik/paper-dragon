import { Get_Monster, ATTACK_TYPE } from '../actions/Combat';

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
  attackType: 'none selected'
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case Get_Monster:
      return { ...state, monster: payload };

    case ATTACK_TYPE:
      return { ...state, attackType: payload };

    default:
      return state;
  }
};
