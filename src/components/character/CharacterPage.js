import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCharacters } from '../../proxies/Character';
import CharacterList from './CharacterList';

class CharacterPage extends Component {
  state = { characters: [] };

  componentDidMount = async () => {
    const { userid } = this.props.user;

    const chars = await fetchCharacters(userid);
    const { data } = chars;

    this.setState({ characters: data });
  };

  render = () => {
    const { characters } = this.state;

    return (
      <div>
        <Link to="/createCharacter">
          <button>Create new character</button>
        </Link>
        {!characters.length ? (
          <h3>LOADING...</h3>
        ) : (
          <div>
            <CharacterList characters={characters} />
          </div>
        )}
      </div>
    );
  };
}

const mapStateToProps = state => {
  const { characterInfo, user } = state;
  return { characterInfo, user };
};

export default connect(mapStateToProps)(CharacterPage);
