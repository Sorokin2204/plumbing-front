import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './SearchHeader.module.scss';
const SearchHeader = () => {
  return (
    <div className={clsx(styles.wrap)}>
      <input type="text" className={clsx(styles.input)} placeholder="Поиск по сайту" />
      <button className="btn">Найти</button>
    </div>
  );
};

export default SearchHeader;
