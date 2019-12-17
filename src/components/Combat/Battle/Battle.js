import React, { Component } from 'react';

import styles from './Battle.module.css';

class Battle extends Component {
  render = () => {
    return (
      <div className={styles.container}>
        <p>This is text to be render in side the container</p>
      </div>
    );
  };
}

export default Battle;
