import React from 'react';

import styles from './CombatContainer.module.css';
import Battle from './Battle/Battle';
import CombatCharDis from './Battle/CombatCharDis';

export const CombatContainer = () => {
  return (
    <>
      <div className={styles.container}>
        <Battle />
      </div>
      <div style={{ width: '42em', margin: 'auto' }}>
        <CombatCharDis />
      </div>
    </>
  );
};
