export const CHARACTER_INFO = 'Character/CHARACTER_INFO';
export const CREATE_CHARACTER = 'Character/CREATE_CHARACTER';
export const SELECTED_CHARACTER = 'Character/SELECTED_CHARACTER';
export const UPDATE_CHARACTER = 'Character/UPDATE_CHARACTER';

export const selectedCharacter = character => {
  return {
    type: SELECTED_CHARACTER,
    payload: { character }
  };
};

export const UpdateCharacter = character => {
  return async dispatch => {
    //api call to update database

    dispatch({
      type: UPDATE_CHARACTER,
      payload: character
    });
  };
};
