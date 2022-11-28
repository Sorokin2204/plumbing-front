import clsx from 'clsx';
import React from 'react';
import styles from './HomeBanner2.module.scss';
const HomeBanner2 = () => {
  return (
    <div className={clsx(styles.wrap)}>
      <div className={clsx(styles.content)}>
        <div className={clsx(styles.title)}>ПЛАТНЫЕ УСЛУГИ</div>
        <div className={clsx(styles.centerText)}>900-68-06</div> <div className={clsx(styles.subtitle)}>по будням с 9 до 18</div>
        <div className={clsx(styles.bottom)}>
          <div className={clsx(styles.bottomList)}>
            <div className={clsx(styles.bottomItem)}>сантехнические работы</div>
            <div className={clsx(styles.bottomItem)}>электромонтажные работы</div>
            <div className={clsx(styles.bottomItem)}>строительные работы</div>
          </div>
          <img src="/img/banner-icon-2.png" alt="" className={clsx(styles.bottomImg)} />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner2;
