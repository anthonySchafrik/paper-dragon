import React, { Component } from 'react';
import { createCharacter } from '../../proxies/createCharacter';

class CreateCharacterPage extends Component {
  render() {
    return (
      <div>
        <h3>Character Create Page</h3>
        <div>
          <label>Character Name</label>
          <input type="text" />
          <label>Select Character Type </label>
          <select>
            <option value="melee">Melee</option>
            <option value="range" disabled>
              Range
            </option>
            <option value="mage" disabled>
              Mage
            </option>
          </select>
          <button>Create Character</button>
        </div>
      </div>
    );
  }
}

export default CreateCharacterPage;
