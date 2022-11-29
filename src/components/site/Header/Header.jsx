import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './Header.module.scss';
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
          <div className={clsx(styles.infoValue)}>5-ugol2020@mail.ru</div>
        </div>
      </div>
      <img src="/img/logo.png" alt="" className={clsx(styles.logo)} />
      <div className={clsx(styles.right)}>
        {' '}
        <div className={clsx(styles.infoLine)}>
          <div className={clsx(styles.info)}>
            <div className={clsx(styles.infoLabel)}>тел. </div>
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
          <div className={clsx(styles.infoLabel)}><a href="#" className={clsx(styles.infoSocialItem)}>Мы во ВКонтакте</a></div>
          <div className={clsx(styles.infoSocial)}>      
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
