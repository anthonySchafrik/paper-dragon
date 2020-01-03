import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './CombatInput.module.css';
import DebounceComponent from '../../DebounceComponent';
import { attackType } from '../../../actions/Combat';

class CombatInput extends Component {
  state = {
    move: ''
  };

  handleMove = (key, value) => this.setState({ move: value });

  handleSetMoveType = () => {
    const { move } = this.state;
    const { attackType } = this.props;

    attackType(move);
  };

  render = () => {
    const { handleMove, handleSetMoveType } = this;

    return (
      <>
        <div className={styles.container}>
          <DebounceComponent
            name="moveType"
            type="text"
            placeholder="Enter input"
            handleChange={handleMove}
          />

          <button onClick={handleSetMoveType}>Select move type</button>
        </div>
      </>
    );
  };
}

export default connect(null, { attackType })(CombatInput);
