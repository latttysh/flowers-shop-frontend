import React from 'react';
import styles from './login.module.scss';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../redux/store';
import Card from '../../components/Card';
import { useSelector } from 'react-redux';
import { selectFlowersData } from '../../redux/slices/selectors';
import { fetchLogin } from '../../redux/slices/asyncActions';

type FormData = {
  email: string;
  password: string;
};

type Props = {};

function Login({}: Props) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const dispatch = useAppDispatch();

  const info = useSelector(selectFlowersData);
  const onSubmit = handleSubmit((data) => {
    dispatch(fetchLogin(data));
  });
  return (
    <div className={styles.login}>
      <Link to="/">
        <div className={styles.logo}>FlowerSh/</div>
      </Link>
      <div className={styles.window}>
        <div className={styles.title}>Вход в кабинет</div>
        <form onSubmit={onSubmit}>
          <label>Почта, или имя</label>
          <input {...register('email')} type="login" placeholder="Ваш логин" />
          <label>Пароль</label>
          <input {...register('password')} type="password" placeholder="Ваш пароль" />
          <button>Войти</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
