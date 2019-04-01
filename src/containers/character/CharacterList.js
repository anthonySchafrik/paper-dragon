import React from 'react';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => {
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
            <Link to={{ pathname: 'character', state: { ...character } }}>
              <button>Play</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterList;
