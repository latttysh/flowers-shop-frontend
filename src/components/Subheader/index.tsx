import React from 'react';
import styles from './subheader.module.scss';

type Props = {};

function Subheader({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.subheader}>
        <div className={styles.item} style={{ fontWeight: '700' }}>
          Букеты
        </div>
        <div className={styles.item}>Шары</div>
        <div className={styles.item}>Торты</div>
        <div className={styles.item}>Подарки</div>
        <div className={styles.item}>Фрукты</div>
        <div className={styles.item}>Игрушки</div>
        <div className={styles.item}>Цветы в горшке</div>
        <div className={styles.item}>Белье</div>
      </div>
    </div>
  );
}

export default Subheader;
