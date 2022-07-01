import React from 'react';
import styles from './card.module.scss';

type Props = {};

function Card({}: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src="./img/1.png" alt="" />
      </div>
      <div className={styles.text__block}>
        <div className={styles.info}>
          <div className={styles.price}>5 000р</div>
          <div className={styles.title}>Розовые розы с оформлением</div>
          <div className={styles.time}>Завтра к 15:30</div>
          <div className={styles.rating}>4,7</div>
        </div>
        <img src="./img/button.svg" alt="" />
      </div>
    </div>
  );
}

export default Card;