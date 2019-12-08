import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createCharacter } from '../../proxies/Character';

class CreateCharacterPage extends Component {
  state = { name: '', type: 'melee' };

  handleCharacterCreate = event => {
    const { id, value } = event.target;

    this.setState({ [id]: value });
  };

  handleCreateCharacter = async () => {
    const { name, type } = this.state;

    const { history, user } = this.props;

    const { userid } = user;

    const newCharacter = await createCharacter({ name, type, userid });

    alert(newCharacter.data);

    history.push('/characterPage');
  };

  render() {
    const { handleCreateCharacter, handleCharacterCreate } = this;
    return (
      <div>
        <h3>Character Create Page</h3>

        <div>
          <label>Character Name</label>
          <input id="name" type="text" onChange={handleCharacterCreate} />
          <label>Select Character Type </label>

          <select id="type" onChange={handleCharacterCreate}>
            <option value="melee">Melee</option>
            <option value="range">Range</option>
            <option value="mage">Mage</option>
          </select>

          <button onClick={handleCreateCharacter}>Create Character</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return { user };
};

export default connect(mapStateToProps, { createCharacter })(
  CreateCharacterPage
);
