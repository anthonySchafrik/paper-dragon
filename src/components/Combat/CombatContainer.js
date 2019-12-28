import React from 'react';

import styles from './CombatContainer.module.css';
import Battle from './Battle/Battle';
import CombatCharDis from './Battle/CombatCharDis';
import CombatInput from './Battle/CombatInput';

export const CombatContainer = () => {
  return (
    <>
      <div className={styles.container}>
        <Battle />
      </div>

      <div style={{ margin: 'auto' }}>
        <CombatCharDis />
      </div>

      <div>
        <CombatInput />
      </div>
    </>
  );
};
