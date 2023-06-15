import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className={clsx(styles.wrap)}>
      <div className={clsx(styles.left)}>
        <div className={clsx(styles.info)}>
          <div className={clsx(styles.infoLabel)}>Адрес: </div>
          <div className={clsx(styles.infoValue)}>194044, Санкт-Петербург</div>
        </div>
        <div className={clsx(styles.info)}>
          <div className={clsx(styles.infoLabel)}></div>
          <div className={clsx(styles.infoValue)}>ул. Смолячкова, д.12, к.2, лит А, оф.301</div>
        </div>
        <div className={clsx(styles.info)}>
          <div className={clsx(styles.infoLabel)}>e-mail: </div>
          <div className={clsx(styles.infoValue)}><a href="5-ugol2020@mail.ru">5-ugol2020@mail.ru</a></div>
        </div>
      </div>
      <Link to="/" className={clsx(styles.logo)}>
        {' '}
        <img src="/img/logo.png" alt="" />
      </Link>
      <div className={clsx(styles.right)}>
        {' '}
        <div className={clsx(styles.infoLine)}>
          <div className={clsx(styles.info)}>
            <div className={clsx(styles.infoLabel)}>Офис тел. </div>
            <div className={clsx(styles.infoValue)}>(812)429-39-95</div>
          </div>
          &nbsp;{' '}
          <div className={clsx(styles.info)}>
            <div className={clsx(styles.infoLabel)}></div>
            <div className={clsx(styles.infoValue)}></div>
          </div>
        </div>
        <div className={clsx(styles.info)}>
          <div className={clsx(styles.infoLabel)}>Аварийная:</div>
          <div className={clsx(styles.infoValue)}>(812)242-10-42, (931)539-08-59</div>
        </div>{' '}
        <div className={clsx(styles.info)}>
          <div className={clsx(styles.infoLabel)}>
            <a href="https://vk.com/club203787986" className={clsx(styles.infoSocialItem)}>
              Мы вонтакте
            </a>
          </div>
          <div className={clsx(styles.infoSocial)}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
