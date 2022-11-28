import React from 'react';
import styles from './MainNews.module.scss';
import clsx from 'clsx';
import { BoltRounded } from '@mui/icons-material';

const MainNews = () => {
  return (
    <div className={clsx(styles.wrap)}>
      <div className={clsx(styles.head)}>
        <BoltRounded style={{ color: '#BD945E', fontSize: '30px', marginBottom: '4px', position: 'absolute', left: '-26px', top: '-9px' }} />
        СРОЧНЫЕ ОБЪЯВЛЕНИЯ
      </div>
      <div className={clsx(styles.list)}>
        <div className={clsx(styles.item)}>
          <div className={clsx(styles.date)}>23.11.22</div>
          <div className={clsx(styles.name)}>Отключение ХВС 27.10.22 пос. Песочный, ул. Ключевая д.73 лит А</div>
        </div>
        <div className={clsx(styles.item)}>
          <div className={clsx(styles.date)}>23.11.22</div>
          <div className={clsx(styles.name)}>Отключение ХВС 27.10.22 пос. Песочный, ул. Ключевая д.73 лит А</div>
        </div>
        <div className={clsx(styles.item)}>
          <div className={clsx(styles.date)}>23.11.22</div>
          <div className={clsx(styles.name)}>Отключение ХВС 27.10.22 пос. Песочный, ул. Ключевая д.73 лит А</div>
        </div>
      </div>
    </div>
  );
};

export default MainNews;
