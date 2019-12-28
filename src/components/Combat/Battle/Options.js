import React, { Component } from 'react';

import styles from './Options.module.css';
class Options extends Component {
  state = {
    toggleOption: false
  };

  handleToggleOption = () => {
    const { toggleOption } = this.state;

    this.setState({ toggleOption: !toggleOption });
  };

  render = () => {
    const { handleToggleOption } = this;

    const { toggleOption } = this.state;

    return (
      <>
        <div className={styles.center}>
          <button onClick={handleToggleOption}>Toggle option</button>
        </div>

        <div
          className={styles.center}
          style={{ display: toggleOption ? null : 'none' }}
        >
          <p>This will be a list of options based on your move type</p>
        </div>
      </>
    );
  };
}

export default Options;
