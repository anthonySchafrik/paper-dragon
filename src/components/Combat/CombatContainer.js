import React from 'react';
import { connect } from 'react-redux';

import styles from './CombatContainer.module.css';
import Battle from './Battle/Battle';
import CombatCharDis from './Battle/CombatCharDis';
import CombatInput from './Battle/CombatInput';
import Options from './Battle/Options';
import { GetRanMon } from '../../actions/Combat';

const CombatContainer = ({ GetRanMon, monster }) => {
  return (
    <>
      <div className={styles.container}>
        <Battle />
      </div>

      <div style={{ margin: 'auto' }}>
        <CombatCharDis />
      </div>

      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '1vh' }}
      >
        <button onClick={GetRanMon}>Find Monster</button>
      </div>

      <div>
        <CombatInput />
      </div>

      <div>
        <Options />
      </div>
    </>
  );
};

const mapStateToProps = state => {
  const { monster } = state.combat;

  return { monster };
};

export default connect(mapStateToProps, { GetRanMon })(CombatContainer);
