import clsx from 'clsx';
import React from 'react';
import styles from './Footer.module.scss';
const Footer = () => {
  return (
    <div className={clsx(styles.wrap)}>
      ООО Жилкомсервис №1 Адмиралтейского района
      <br /> © 2018 - 2022
    </div>
  );
};

export default Footer;
