import { formFiller } from './actions';

export const handleInfo = (key, value, type) => {
  formFiller(key, value, type);
};

export const log = console.log;

export const playTurn = (char, attack, mon) => {
  const { moves: monMoves } = mon;
  const { high: ph, low: pl } = attack[0];

  const monAttack = randomNum(monMoves.length, 0);

  const playerDam = randomNum(ph, pl);

  console.log(monAttack, playerDam);
};

const randomNum = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
