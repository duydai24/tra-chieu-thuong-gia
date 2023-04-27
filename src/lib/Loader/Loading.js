import React from 'react';

import styles from './styles.module.scss';

export function Loading({hidden, className}) {
  if (hidden) return null;
  return (
    <div className={styles.page + ' ' + className}>
      <main className={styles.container}>
        <div className={styles.item}>
          <i className={styles.loader + ' ' + styles.type7}></i>
        </div>
      </main>
    </div>
  );
}
