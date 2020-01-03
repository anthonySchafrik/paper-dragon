import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './Options.module.css';

class Options extends Component {
  state = {
    toggleOption: false
  };

  handleToggleOption = () => {
    const { toggleOption } = this.state;

    this.setState({ toggleOption: !toggleOption });
  };

  displayOptions = () => {
    const { attackType, options } = this.props;

    if (attackType === 'none selected') {
      return <div>No move type selected</div>;
    } else {
      return options[attackType].map((item, i) => {
        const { name } = item;

        return <li key={i}>{name}</li>;
      });
    }
  };

  render = () => {
    const { handleToggleOption, displayOptions } = this;

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
          <div>
            <ul>{displayOptions()}</ul>
          </div>
        </div>
      </>
    );
  };
}

const mapStateToProps = state => {
  const { attackType, options } = state.combat;

  return { attackType, options };
};

export default connect(mapStateToProps, {})(Options);
