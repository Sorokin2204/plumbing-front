import clsx from 'clsx';
import React from 'react';
import HomeBanner1 from '../HomeBanner1/HomeBanner1';
import HomeBanner2 from '../HomeBanner2/HomeBanner2';
import HomeBanner3 from '../HomeBanner3/HomeBanner3';
import styles from './HomeBanners.module.scss';
const HomeBanners = () => {
  return (
    <div>
      <div className={clsx(styles.wrap)}>
        <HomeBanner1 />
        <HomeBanner2 />
        <HomeBanner3 />
      </div>
      <a href="https://infocit.ellis.ru/joomla/index.php/oplata">
        <img src="/img/banner-full.png" alt="" className={clsx(styles.fullBanner)} />
      </a>
    </div>
  );
};

export default HomeBanners;
