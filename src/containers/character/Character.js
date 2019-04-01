import React from 'react';

const Character = props => {
  const { id, userid, name, level, hp, exp } = props.location.state;
  return (
    <div>
      <h3>{name}</h3>
      <h5>Health => {hp}</h5>
      <h5>Level => {level}</h5>
      <h5>Exp => {exp}</h5>
    </div>
  );
};

export default Character;
