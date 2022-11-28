import React from 'react';
import styles from './HomeNavigation.module.scss';
import clsx from 'clsx';

const HomeNavigation = () => {
  return (
    <div className={clsx(styles.list)}>
      <div className={clsx(styles.item)}>
        <img src="/img/nav-1.png" alt="" className={clsx(styles.icon)} />
        <div className={clsx(styles.name)}>ИНТЕРНЕТ-ПРИЕМНАЯ</div>
      </div>
      <div className={clsx(styles.item)}>
        <img src="/img/nav-2.png" alt="" className={clsx(styles.icon)} />
        <div className={clsx(styles.name)}>Контакты</div>
      </div>
      <div className={clsx(styles.item)}>
        <img src="/img/nav-3.png" alt="" className={clsx(styles.icon)} />
        <div className={clsx(styles.name)}>Новости</div>
      </div>
      <div className={clsx(styles.item)}>
        <img src="/img/nav-4.png" alt="" className={clsx(styles.icon)} />
        <div className={clsx(styles.name)}>Подать показания</div>
      </div>
      <div className={clsx(styles.item)}>
        <img src="/img/nav-5.png" alt="" className={clsx(styles.icon)} />
        <div className={clsx(styles.name)}>Дома в управлении</div>
      </div>
      <div className={clsx(styles.item)}>
        <img src="/img/nav-6.png" alt="" className={clsx(styles.icon)} />
        <div className={clsx(styles.name)}>Отчеты о выполненных работах</div>
      </div>
      <div className={clsx(styles.item)}>
        <img src="/img/nav-7.png" alt="" className={clsx(styles.icon)} />
        <div className={clsx(styles.name)}>Раскрытие информации</div>
      </div>
      <div className={clsx(styles.item)}>
        <img src="/img/nav-8.png" alt="" className={clsx(styles.icon)} />
        <div className={clsx(styles.name)}>Вакансии</div>
      </div>
    </div>
  );
};

export default HomeNavigation;
