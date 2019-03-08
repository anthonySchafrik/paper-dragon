import React, { Component } from 'react';

class CreateCharacter extends Component {
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
        </div>
      </div>
    );
  }
}

export default CreateCharacter;
