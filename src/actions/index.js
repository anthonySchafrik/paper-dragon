export const LOGIN = 'index/LOGIN';
export const LOG_OUT = 'index/LOG_OUT';
export const SIGN_UP = 'index/SIGN_UP';

export const formFiller = (key, value, type) => {
  return {
    type,
    payload: {
      [key]: value
    }
  };
};
