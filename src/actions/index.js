export const CHARACTER_INFO = 'CHARACTER_INFO';
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
