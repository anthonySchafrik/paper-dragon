import React, { Component } from 'react';

import styles from './CombatInput.module.css';
import DebounceComponent from '../../DebounceComponent';

class CombatInput extends Component {
  state = {
    move: ''
  };

  handleMove = value => this.setState({ move: value });

  render = () => {
    const { handleMove } = this;

    return (
      <>
        <div>
          <DebounceComponent
            name="moveType"
            type="text"
            placeholder="Enter input"
            handleChange={handleMove}
          />

          <button>Select move type</button>
        </div>
      </>
    );
  };
}

export default CombatInput;
