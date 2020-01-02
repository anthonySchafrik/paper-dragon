export const CHARACTER_INFO = 'Character/CHARACTER_INFO';
export const CREATE_CHARACTER = 'Character/CREATE_CHARACTER';
export const SELECTED_CHARACTER = 'Character/SELECTED_CHARACTER';

export const selectedCharacter = character => {
  return {
    type: SELECTED_CHARACTER,
    payload: { character }
  };
};
