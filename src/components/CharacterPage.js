import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCharacters } from '../proxies/fetchCharacters';

class CharacterPage extends Component {
  constructor(props) {
    super(props);

    this.state = { characters: [] };
  }

  componentDidMount() {
    const { username } = this.props.loginInfo;
    fetchCharacters(username).then(res => {
      this.setState({ characters: [...res.data] });
    });
  }

  render() {
    const { characters } = this.state;

    if (!characters.length) {
      return <h3>LOADING...</h3>;
    } else {
      return (
        <div>
          <h3>Character Page</h3>
          {characters.map(character => {
            return (
              <div>
                <ul>
                  <li>{character.name}</li>
                  <li>{character.level}</li>
                </ul>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  const { characterInfo, loginInfo } = state;
  return { characterInfo, loginInfo };
};

export default connect(mapStateToProps)(CharacterPage);
