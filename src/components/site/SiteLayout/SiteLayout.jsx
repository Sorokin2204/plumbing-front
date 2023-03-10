import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeaderBottom from '../HeaderBottom/HeaderBottom';
import styles from './SiteLayout.module.scss';
// import { isvek } from 'bvi';
import userhelperlibrary from 'userhelperlibrary';
const SiteLayout = ({ children }) => {
  useEffect(() => {
    // new isvek.Bvi();
    userhelperlibrary();
  }, []);

  return (
    <>
      <div class={styles.wrapper}>
        <div style={{ backgroundImage: 'url(/img/header-img.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <div class="container">
            <Header />
          </div>
          <HeaderBottom />
        </div>
        <div style={{ height: '100%' }}> {children}</div>
        <Footer />
      </div>
    </>
  );
};

export default SiteLayout;
