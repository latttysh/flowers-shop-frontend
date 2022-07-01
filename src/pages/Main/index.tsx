import React from 'react';
import styles from './main.module.scss';
import MenuItem from '../../components/MenuItem';
import Card from '../../components/Card';

type Props = {};

function Main({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>Доставка цветов</div>
        <div className={styles.menu}>
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </div>
        <div className={styles.card__menu}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Main;
