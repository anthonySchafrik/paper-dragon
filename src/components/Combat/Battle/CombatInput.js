import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './CombatInput.module.css';
import DebounceComponent from '../../DebounceComponent';
import { attackType, attackMove } from '../../../actions/Combat';
import { playTurn } from '../.././../utils';

class CombatInput extends Component {
  state = {
    move: '',
    attack: ''
  };

  handleInput = (key, value) => this.setState({ [key]: value });

  handleSetMoveType = () => {
    const { move } = this.state;
    const { attackType } = this.props;

    attackType(move);
  };

  handleSetAttack = () => {
    const { combat, selectedCharacter } = this.props;
    const { monster, options, attackType } = combat;

    playTurn(selectedCharacter, options[attackType], monster);
  };

  render = () => {
    const { handleInput, handleSetMoveType, handleSetAttack } = this;

    return (
      <>
        <div className={styles.container}>
          <DebounceComponent
            name="move"
            type="text"
            placeholder="Enter input"
            handleChange={handleInput}
          />

          <button onClick={handleSetMoveType}>Select move type</button>
        </div>

        <div className={styles.container}>
          <DebounceComponent
            name="attack"
            type="text"
            placeholder="Enter Attack"
            handleChange={handleInput}
            maxLength={25}
          />

          <button onClick={handleSetAttack}>Select Attack</button>
        </div>
      </>
    );
  };
}

const mapStateToProps = state => {
  const { selectedCharacter } = state.character;

  return {
    selectedCharacter,
    combat: state.combat
  };
};

export default connect(mapStateToProps, { attackType, attackMove })(
  CombatInput
);
