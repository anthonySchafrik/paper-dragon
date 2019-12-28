import React from 'react';

import styles from './CombatContainer.module.css';
import Battle from './Battle/Battle';
import CombatCharDis from './Battle/CombatCharDis';
import CombatInput from './Battle/CombatInput';
import Options from './Battle/Options';

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

      <div>
        <Options />
      </div>
    </>
  );
};
