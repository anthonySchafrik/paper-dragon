import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectedCharacter } from '../../actions';

const CharacterList = ({ characters, selectedCharacter }) => {
  const handleCharacterSelect = character => () => {
    selectedCharacter(character);
  };

  return (
    <div>
      <h3>Character List</h3>
      {characters.map((character, i) => {
        return (
          <div key={i}>
            <ul>
              <li>{character.name}</li>
              <li>Level {character.level}</li>
            </ul>
            <Link to="character">
              <button onClick={handleCharacterSelect(character)}>Play</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default connect(null, { selectedCharacter })(CharacterList);
