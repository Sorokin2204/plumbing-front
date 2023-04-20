import clsx from 'clsx';
import React from 'react';
import styles from './HomeBanner3.module.scss';
const HomeBanner3 = () => {
  return (
    <div className={clsx(styles.wrap)}>
      <div className={clsx(styles.content)}>
        <div className={clsx(styles.title)}>БУХГАЛТЕРИЯ</div>
        <div className={clsx(styles.centerText)}>+7(812)429-39-95</div>
        <div className={clsx(styles.subtitle)}>
          <b></b>
        </div>
        <div className={clsx(styles.bottom)}>
          <div className={clsx(styles.bottomText)}>
            Часы приема бухгалтерии: Понедельник, среда, пятница
            <br />с 9-00 до 13-00
          </div>
          <img src="/img/banner-icon-3.png" alt="" className={clsx(styles.bottomImg)} />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner3;
