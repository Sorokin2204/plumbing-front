import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './HeaderBottom.module.scss';
import SelectLink from '../SelectLink/SelectLink';
import SearchHeader from '../SearchHeader/SearchHeader';
const HeaderBottom = () => {
  return (
    <div className={clsx(styles.wrap)}>
      <div className={clsx(styles.label)}>Выберите ваш дом</div>
      <SelectLink />
      <SearchHeader />
    </div>
  );
};

export default HeaderBottom;
