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
          +7(812)242-10-42 <br /> +7(931)539-08-59
        </div>
        <div className={clsx(styles.bottom)}>
          <div className={clsx(styles.bottomText)}>
            заявки по аварийным ситуациям<br />
			вызов ремонтного персонала
          </div>
          <img src="/img/banner-icon-1.png" alt="" className={clsx(styles.bottomImg)} />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner1;
