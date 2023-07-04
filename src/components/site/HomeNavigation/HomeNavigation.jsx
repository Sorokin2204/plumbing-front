import React from 'react';
import styles from './HomeNavigation.module.scss';
import clsx from 'clsx';
import { useNavigate } from 'react-router';

const HomeNavigation = () => {
  const navigate = useNavigate();
  return (
    <div className={clsx(styles.wrap)}>
      <div className={clsx(styles.list)}>
        <div
          className={clsx(styles.item)}
          onClick={() => {
            navigate('/reception');
          }}>
          <img src="/img/nav-1.png" alt="" className={clsx(styles.icon)} />
          <div className={clsx(styles.name)}>Интернет-приемная</div>
        </div>
        <div
          className={clsx(styles.item)}
          onClick={() => {
            navigate('/contact');
          }}>
          <img src="/img/nav-2.png" alt="" className={clsx(styles.icon)} />
          <div className={clsx(styles.name)}>Контакты</div>
        </div>
        <div
          className={clsx(styles.item)}
          onClick={() => {
            navigate('/news/list');
          }}>
          <img src="/img/nav-3.png" alt="" className={clsx(styles.icon)} />
          <div className={clsx(styles.name)}>Новости</div>
        </div>
        <div
          className={clsx(styles.item)}
          onClick={() => {
            navigate('/services');
          }}>
          <img src="/img/nav-4.png" alt="" className={clsx(styles.icon)} />
          <div className={clsx(styles.name)}>Платные услуги</div>
        </div>
        <div
          className={clsx(styles.item)}
          onClick={() => {
            navigate('/houses');
          }}>
          <img src="/img/nav-5.png" alt="" className={clsx(styles.icon)} />
          <div className={clsx(styles.name)}>Дома в управлении</div>
        </div>
        <div
          className={clsx(styles.item)}
          onClick={() => {
            navigate('/report');
          }}>
          <img src="/img/nav-6.png" alt="" className={clsx(styles.icon)} />
          <div className={clsx(styles.name)}>Отчеты по МКД за год</div>
        </div>
        <div
          className={clsx(styles.item)}
          onClick={() => {
            navigate('/information');
          }}>
          <img src="/img/nav-7.png" alt="" className={clsx(styles.icon)} />
          <div className={clsx(styles.name)}>Раскрытие информации</div>
        </div>
        <div
          className={clsx(styles.item)}
          onClick={() => {
            navigate('/jobs');
          }}>
          <img src="/img/nav-8.png" alt="" className={clsx(styles.icon)} />
          <div className={clsx(styles.name)}>Вакансии</div>
        </div>
      </div>
    </div>
  );
};

export default HomeNavigation;
