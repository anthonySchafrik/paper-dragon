import React from 'react';
import { connect } from 'react-redux';

import { selectedCharacter } from '../../actions';

const CharacterList = ({ characters, selectedCharacter }) => {
  return (
    <div>
      <h3>Character List</h3>
      {characters.map(character => {
        return (
          <div key={character.id}>
            <ul>
              <li>{character.name}</li>
              <li>Level {character.level}</li>
            </ul>
            <button onClick={() => selectedCharacter(character)}>Play</button>
          </div>
        );
      })}
    </div>
  );
};

export default connect(
  null,
  { selectedCharacter }
)(CharacterList);
