import React from 'react';

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
          </div>
        );
      })}
    </div>
  );
};

export default CharacterList;
