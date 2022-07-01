import React from 'react';
import styles from './header.module.scss';

type Props = {};

function Header({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>FlowerSh/</div>
        <div className={styles.menu}>
          <div className={styles.item}>Доставка</div>
          <div className={styles.item}>Оплата</div>
          <div className={styles.item}>Отзывы</div>
          <div className={styles.item}>Магазины</div>
          <div className={styles.item}>EN</div>
          <div className={styles.item}>Помощь</div>
          <div className={styles.item}>Войти</div>
          <div className={styles.item}>Корзина</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
