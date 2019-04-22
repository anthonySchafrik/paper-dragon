export const CHARACTER_INFO = 'CHARACTER_INFO';
export const CREATE_CHARACTER = 'CREATE_CHARACTER';
export const SELECTED_CHARACTER = 'SELECTED_CHARACTER';
export const LOGIN = 'LOGIN';
export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP = 'SIGN_UP';

export const formFiller = (key, value, type) => {
  return {
    type,
    payload: {
      [key]: value
    }
  };
};

export const selectedCharacter = character => {
  console.log('action fired');
  return {
    type: SELECTED_CHARACTER,
    payload: character
  };
};
