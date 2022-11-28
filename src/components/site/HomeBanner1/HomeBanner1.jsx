import clsx from 'clsx';
import React from 'react';
import styles from './HomeBanner1.module.scss';
const HomeBanner1 = () => {
  return (
    <div className={clsx(styles.wrap)}>
      <div className={clsx(styles.content)}>
        <div className={clsx(styles.title)}>АВАРИЙНАЯ СЛУЖБА</div>
        <div className={clsx(styles.subtitle)}>круглосуточно</div>
        <div className={clsx(styles.centerText)}>
          316-14-36, 316-27-29 <br /> 679-32-03
        </div>
        <div className={clsx(styles.bottom)}>
          <div className={clsx(styles.bottomText)}>
            Адрес: <br /> 7-я Красноармейская ул., д. 22-24
          </div>
          <img src="/img/banner-icon-1.png" alt="" className={clsx(styles.bottomImg)} />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner1;
