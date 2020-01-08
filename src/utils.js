import { formFiller } from './actions';

export const handleInfo = (key, value, type) => {
  formFiller(key, value, type);
};

export const log = console.log;

export const playTurn = (char, charAttack, mon) => {
  const { moves: monMoves } = mon;
  const { high: ph, low: pl } = charAttack[0];

  //selects the attack from the moves array
  const monAttackArray = monMoves[randomNum(monMoves.length, 0)];

  const { high: mh, low: ml } = monAttackArray[1];

  //getting the damage the monster and the player
  const monDamageDone = randomNum(mh, ml);
  const playerDamageDone = randomNum(ph, pl);

  //return damage for the turn
  return {
    monAttach: monAttackArray[0],
    monDamg: monDamageDone,
    playerDamDone: playerDamageDone
  };
};

const randomNum = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
