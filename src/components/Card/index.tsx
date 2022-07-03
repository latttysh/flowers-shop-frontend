import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './card.module.scss';

interface CardProps {
  imgUrl: string;
  title: string;
  price: string;
  time: string;
  rating: string;
  id: string;
}

const Card: FC<CardProps> = ({ id, imgUrl, title, price, time, rating }) => {
  return (
    <div className={styles.card}>
      <Link to={`/item/${id}`}>
        <div className={styles.img}>
          <img src={imgUrl} alt="" />
        </div>
      </Link>
      <div className={styles.text__block}>
        <Link to={`/item/${id}`}>
          <div className={styles.info}>
            <div className={styles.price}>{price} р</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.time}>{time}</div>
            <div className={styles.rating}>{rating}</div>
          </div>
        </Link>
        <img src="./img/button.svg" alt="" />
      </div>
    </div>
  );
};

export default Card;
