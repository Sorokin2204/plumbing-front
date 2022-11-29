import clsx from 'clsx';
import React from 'react';
import styles from './Footer.module.scss';
const Footer = () => {
  return (
    <div className={clsx(styles.wrap)}>
      ООО УК «ПЯТЬ УГЛОВ ГРУПП», © 2020-2022
      <br />«Мы заботимся о вашем комфорте»
    </div>
  );
};

export default Footer;
