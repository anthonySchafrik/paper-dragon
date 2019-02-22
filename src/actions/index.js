export const SIGN_UP = 'SIGN_UP';
export const LOGIN = 'LOGIN';

export const formFiller = (key, value, type) => {
  return {
    type,
    payload: {
      [key]: value
    }
  };
};
