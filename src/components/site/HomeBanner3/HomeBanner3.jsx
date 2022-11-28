import clsx from 'clsx';
import React from 'react';
import styles from './HomeBanner3.module.scss';
const HomeBanner3 = () => {
  return (
    <div className={clsx(styles.wrap)}>
      <div className={clsx(styles.content)}>
        <div className={clsx(styles.title)}>БУХГАЛТЕРИЯ ПО КВАРТПЛАТЕ</div>
        <div className={clsx(styles.bottomList)}>
          <div className={clsx(styles.bottomItem)}>
            <b>Серпуховская ул., д.19: </b>644-78-91, <a href="#">6447891@list.ru</a>
          </div>
          <div className={clsx(styles.bottomItem)}>
            <b>наб. кан. Грибоедова, д.112:</b> 644-78-92,<a href="#"> 6447892@list.ru</a>
          </div>
        </div>
        <div className={clsx(styles.bottom)}>
          <div className={clsx(styles.bottomText)}>Часы приема бухгалтерий: Понедельник с 15:00 до 18:00, Пятница с 09:00 до 12:00</div>
          <img src="/img/banner-icon-3.png" alt="" className={clsx(styles.bottomImg)} />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner3;
