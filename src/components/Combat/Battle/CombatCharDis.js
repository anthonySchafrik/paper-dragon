import React from 'react';
import { connect } from 'react-redux';

import styles from './CombatCharDis.module.css';

const CombatCharDis = ({ character }) => {
  const { name, level, hp, exp, type } = character;
  return (
    <>
      <div className={styles.titleRow}>
        <div>Character</div>
        <div>level</div>
        <div>hp</div>
        <div>exp</div>
        <div>type</div>
      </div>

      <div className={styles.charInfo}>
        <div>{name}</div>
        <div>{level}</div>
        <div>{hp}</div>
        <div>{exp}</div>
        <div>{type}</div>
      </div>
    </>
  );
};

const mapStateToProds = state => {
  const { selectedCharacter } = state.character;

  return {
    character: selectedCharacter
  };
};

export default connect(mapStateToProds, {})(CombatCharDis);
