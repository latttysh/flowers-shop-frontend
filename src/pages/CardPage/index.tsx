import React, { FC } from 'react';
import styles from './cardpage.module.scss';

interface CardPageProps {
  imgUrl: string;
  title: string;
  executor: string;
  article: string;
}

const CardPage: FC<CardPageProps> = ({ imgUrl, title, executor, article }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardpage}>
        <div className={styles.item}>
          <div className={styles.img}>
            <img src="/img/1.png" alt="" />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.title}>Розовые розы с оформлением</div>
          <div className={styles.executor}>Исполнитель: Дом цветов</div>
          <div className={styles.article}>Артикул: 4323123</div>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
