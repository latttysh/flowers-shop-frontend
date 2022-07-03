import React from 'react';
import styles from './main.module.scss';
import MenuItem from '../../components/MenuItem';
import Card from '../../components/Card';
import { useAppDispatch } from '../../redux/store';
import { fetchFlowers } from '../../redux/slices/asyncActions';
import { useSelector } from 'react-redux';
import { selectFlowersData } from '../../redux/slices/selectors';

type Props = {};

function Main({}: Props) {
  const info = useSelector(selectFlowersData);
  console.log(info);

  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchFlowers());
  }, []);

  const flowers = info.items.map((item: any) => (
    <Card
      key={item.id}
      imgUrl={item.imageUrl}
      title={item.title}
      price={item.price}
      time={'Завтра'}
      rating={'4.7'}
      id={item._id}
    />
  ));

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
          {info.status === 'completed' ? flowers : <>Загрузка данных....</>}
        </div>
      </div>
    </div>
  );
}

export default Main;
