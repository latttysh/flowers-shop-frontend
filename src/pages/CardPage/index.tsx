import React, { FC } from 'react';
import { useAppDispatch } from '../../redux/store';
import { fetchOne } from '../../redux/slices/asyncActions';
import styles from './cardpage.module.scss';
import { useSelector } from 'react-redux';
import { selectFlowersData } from '../../redux/slices/selectors';
import { useParams } from 'react-router-dom';

const CardPage: FC = () => {
  const info = useSelector(selectFlowersData);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchOne(`${id}`));
  }, []);

  return (
    <div className={styles.container}>
      {info.status === 'completed' ? (
        <div className={styles.cardpage}>
          <div className={styles.item}>
            <div className={styles.img}>
              <img src={info.oneItem.imageUrl} alt="" />
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.title}>{info.oneItem.title}</div>
            <div className={styles.executor}>Исполнитель: Дом цветов</div>
            <div className={styles.article}>Артикул: {info.oneItem._id}</div>
          </div>
        </div>
      ) : (
        <>Загрузка</>
      )}
    </div>
  );
};

export default CardPage;
