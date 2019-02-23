import React, { Component } from 'react';
import { connect } from 'react-redux';

class CharacterPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h3>Character Page</h3>
        <ul>
          <li>Character 1</li>
          <li>Character 2</li>
          <li>Character 3</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { characterInfo, loginInfo } = state;
  return { characterInfo, loginInfo };
};

export default connect(mapStateToProps)(CharacterPage);
