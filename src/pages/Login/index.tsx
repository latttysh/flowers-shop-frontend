import React from 'react';
import styles from './login.module.scss';

type Props = {};

function Login({}: Props) {
  return (
    <div className={styles.login}>
      <div className={styles.logo}>FlowerSh/</div>
      <div className={styles.window}>
        <div className={styles.title}>Вход в кабинет</div>
        <form>
          <label>Почта, или имя</label>
          <input type="login" placeholder="Ваш логин" />
          <label>Пароль</label>
          <input type="login" placeholder="Ваш пароль" />
          <button>Войти</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
