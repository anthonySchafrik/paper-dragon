import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './Battle.module.css';

class Battle extends Component {
  state = {
    monster: this.props.combat.monster,
    selectedCharacter: this.props.selectedCharacter
  };

  componentDidUpdate = prevProps => {
    const { monster: preMon } = prevProps.combat;

    const { monster } = this.props.combat;

    if (preMon.type !== monster.type) {
      this.setState({ monster });
    }
  };

  render = () => {
    const { type, element } = this.state.monster;

    return (
      <div className={styles.container}>
        <p>
          {type === 'none'
            ? 'Looking for Monster to battle'
            : `A ${element} ${type} appears`}
        </p>
      </div>
    );
  };
}

const mapStateToProps = state => {
  const { combat } = state;
  const { selectedCharacter } = state.character;

  return { combat, selectedCharacter };
};

export default connect(mapStateToProps, {})(Battle);
