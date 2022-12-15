import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './SelectLink.module.scss';
const SelectLink = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={clsx(styles.wrap)}>
      <input
        type="text"
        placeholder="Выберите дом"
        onFocus={() => {
          setShowMenu(true);
        }}
        onBlur={() => {
          setShowMenu(false);
        }}
      />
      {showMenu && (
        <div className={clsx(styles.menu)}>
          <a href="#" className={clsx(styles.menuLink)}>
            г. Санкт-Петербург, ул. Рубинштейна, д. 20
          </a>
          <a href="#" className={clsx(styles.menuLink)}>
            г. Всеволожск, пр. Добровольского, д.22, корп.1
          </a>
          <a href="#" className={clsx(styles.menuLink)}>
            г. Всеволожск, ул. Северная, д. 4
          </a>
          <a href="#" className={clsx(styles.menuLink)}>
            г. Всеволожск, ул. Шишканя, д. 12
          </a>
          <a href="#" className={clsx(styles.menuLink)}>
            г. Всеволожск, ул. Культуры, д. 4/80
          </a>
          <a href="#" className={clsx(styles.menuLink)}>
            г. Всеволожск, пр. Октябрьский, д. 53
          </a>
        </div>
      )}
    </div>
  );
};

export default SelectLink;
