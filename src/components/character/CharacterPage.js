import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCharacters } from '../../proxies/fetchCharacters';
import CharacterList from './CharacterList';

class CharacterPage extends Component {
  state = { characters: [] };

  componentDidMount = async () => {
    const { userid } = this.props.loginInfo;

    const chars = await fetchCharacters(userid);
    const { data } = chars;

    this.setState({ characters: data });
  };

  render = () => {
    const { characters } = this.state;

    return (
      <div>
        {!characters.length ? (
          <h3>LOADING...</h3>
        ) : (
          <div>
            <Link to="createCharacter">
              <button>Create new character</button>
            </Link>
            <CharacterList characters={characters} />
          </div>
        )}
      </div>
    );
  };
}

const mapStateToProps = state => {
  const { characterInfo, loginInfo } = state;
  return { characterInfo, loginInfo };
};

export default connect(mapStateToProps)(CharacterPage);
