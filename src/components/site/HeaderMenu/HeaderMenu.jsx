import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './HeaderMenu.module.scss';
import { Link } from 'react-router-dom';
const HeaderMenu = () => {
  return (
    <div class="container">
      <div className={clsx(styles.list)}>
        <Link to="/" className={clsx(styles.link)}>
          Главная
        </Link>
        <Link to="/" className={clsx(styles.link)}>
          Контакты
        </Link>
        <Link to="/" className={clsx(styles.link)}>
          Услуги
        </Link>
        <Link to="/" className={clsx(styles.link)}>
          Новости
        </Link>
        <Link to="/" className={clsx(styles.link)}>
          Вакансии
        </Link>
      </div>
    </div>
  );
};

export default HeaderMenu;