import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './CombatInput.module.css';
import DebounceComponent from '../../DebounceComponent';

import {
  attackType,
  attackMove,
  monsterAttackText
} from '../../../actions/Combat';

import { UpdateCharacter } from '../../../actions/Character';
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
    const {
      combat,
      selectedCharacter,
      monsterAttackText,
      UpdateCharacter
    } = this.props;

    const { hp } = selectedCharacter;
    const { monster, options, attackType } = combat;

    const turn = playTurn(selectedCharacter, options[attackType], monster);
    const { monAttach, monDamg, playerDamDone } = turn;

    //sets the test for mon attack and damg
    monsterAttackText(monAttach, monDamg);

    //updates the char hp after attack
    UpdateCharacter({ ...selectedCharacter, hp: hp - monDamg });
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
            timeout={200}
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
            timeout={200}
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

export default connect(mapStateToProps, {
  attackType,
  attackMove,
  monsterAttackText,
  UpdateCharacter
})(CombatInput);
