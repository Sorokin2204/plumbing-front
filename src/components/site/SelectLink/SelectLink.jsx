import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './SelectLink.module.scss';
const SelectLink = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={clsx(styles.wrap)}>
      <input
        type="text"
        placeholder="Выберите дом..."
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
            1-я Красноармейская ул., д. 12, лит. А
          </a>
          <a href="#" className={clsx(styles.menuLink)}>
            1-я Красноармейская ул., д. 12, лит. А
          </a>
          <a href="#" className={clsx(styles.menuLink)}>
            1-я Красноармейская ул., д. 12, лит. А
          </a>
          <a href="#" className={clsx(styles.menuLink)}>
            1-я Красноармейская ул., д. 12, лит. А
          </a>
        </div>
      )}
    </div>
  );
};

export default SelectLink;
