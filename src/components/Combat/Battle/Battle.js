import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './Battle.module.css';

class Battle extends Component {
  state = { monster: this.props.monster };

  componentDidUpdate = prevProps => {
    const { monster: preMon } = prevProps;

    const { monster } = this.props;

    if (preMon.type !== monster.type) {
      this.setState({ monster });
    }
  };

  render = () => {
    const { type, element, moves } = this.state.monster;

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
  const { monster } = state.combat;
  return { monster };
};

export default connect(mapStateToProps, {})(Battle);
