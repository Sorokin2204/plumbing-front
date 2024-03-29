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
		<Link to="/about" className={clsx(styles.link)}>
          О компании
        </Link>
        <Link to="/rates" className={clsx(styles.link)}>
          Тарифы
        </Link>
         <Link to="/contact" className={clsx(styles.link)}>
          Контакты
        </Link>
      </div>
    </div>
  );
};

export default HeaderMenu;
