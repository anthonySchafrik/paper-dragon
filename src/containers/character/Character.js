import React from 'react';
import { connect } from 'react-redux';

const Character = ({ character }) => {
  const { id, userid, name, level, hp, exp } = character;

  return (
    <div>
      <h3>{name}</h3>
      <h5>Health => {hp}</h5>
      <h5>Level => {level}</h5>
      <h5>Exp => {exp}</h5>
    </div>
  );
};

const mapStateToProps = state => {
  const { selectedCharacter } = state.character;
  return { character: selectedCharacter };
};

export default connect(mapStateToProps)(Character);
