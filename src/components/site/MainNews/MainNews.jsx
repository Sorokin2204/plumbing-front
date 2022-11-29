import React from 'react';
import styles from './MainNews.module.scss';
import clsx from 'clsx';
import { BoltRounded } from '@mui/icons-material';

const MainNews = () => {
  return (
    <div className={clsx(styles.wrap)}>
      <div className={clsx(styles.head)}>
        <BoltRounded style={{ color: '#F2C846', fontSize: '30px', marginBottom: '4px', position: 'absolute', left: '-26px', top: '-9px' }} />
        СРОЧНЫЕ ОБЪЯВЛЕНИЯ
      </div>
      <div className={clsx(styles.list)}>
        <div className={clsx(styles.item)}>
          <div className={clsx(styles.date)}>22.11.22</div>
          <div className={clsx(styles.name)}>ВНИМАНИЕ! Открыта вакансия — Управляющий МКД г.Всеволожск</div>
        </div>
        <div className={clsx(styles.item)}>
          <div className={clsx(styles.date)}>21.09.22</div>
          <div className={clsx(styles.name)}>Долги за ЖКУ (сентябрь 2022), г.Всеволожск, Северная д.4</div>
        </div>
        <div className={clsx(styles.item)}>
          <div className={clsx(styles.date)}>04.08.22</div>
          <div className={clsx(styles.name)}>Технические работы ООО «ПетербургГаз», ул. Рубинштейна д.20, 29.08.2022 г.</div>
        </div>
      </div>
    </div>
  );
};

export default MainNews;
