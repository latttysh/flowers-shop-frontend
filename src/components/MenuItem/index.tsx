import React from 'react';
import styles from './menuitem.module.scss';

type Props = {};

function MenuItem({}: Props) {
  return <div className={styles.menuitem}>Поштучно</div>;
}

export default MenuItem;
