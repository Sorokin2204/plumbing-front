import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './Header.module.scss';
const Header = () => {
  return (
    <header className={clsx(styles.wrap)}>
      <div className={clsx(styles.left)}>
        <div className={clsx(styles.info)}>
          <div className={clsx(styles.infoLabel)}>Адрес: </div>
          <div className={clsx(styles.infoValue)}>190121, Санкт-Петербург</div>
        </div>
        <div className={clsx(styles.info)}>
          <div className={clsx(styles.infoLabel)}></div>
          <div className={clsx(styles.infoValue)}>ул. Лабутина, д. 24</div>
        </div>
        <div className={clsx(styles.info)}>
          <div className={clsx(styles.infoLabel)}>e-mail: </div>
          <div className={clsx(styles.infoValue)}>office@gks1adm.ru</div>
        </div>
      </div>
      <img src="/img/logo.png" alt="" className={clsx(styles.logo)} />
      <div className={clsx(styles.right)}>
        {' '}
        <div className={clsx(styles.infoLine)}>
          <div className={clsx(styles.info)}>
            <div className={clsx(styles.infoLabel)}>тел. </div>
            <div className={clsx(styles.infoValue)}>714-16-56, </div>
          </div>
          &nbsp;{' '}
          <div className={clsx(styles.info)}>
            <div className={clsx(styles.infoLabel)}>факс</div>
            <div className={clsx(styles.infoValue)}>714-06-36</div>
          </div>
        </div>
        <div className={clsx(styles.info)}>
          <div className={clsx(styles.infoLabel)}>заявки и аварии:</div>
          <div className={clsx(styles.infoValue)}>316-14-36, 316-27-29</div>
        </div>{' '}
        <div className={clsx(styles.info)}>
          <div className={clsx(styles.infoLabel)}>мы в соц сетях:</div>
          <div className={clsx(styles.infoSocial)}>
            <a href="https://vk.com/feed" className={clsx(styles.infoSocialItem)}>
              <img src="/img/vk.png" alt="" className="" />
            </a>
            <a href="https://telegram.org/" className={clsx(styles.infoSocialItem)}>
              <img src="/img/telegram.png" alt="" className="" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
