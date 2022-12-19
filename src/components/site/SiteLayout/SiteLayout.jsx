import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeaderBottom from '../HeaderBottom/HeaderBottom';
import styles from './SiteLayout.module.scss';
const SiteLayout = ({ children }) => {
  return (
    <>
      <div class={styles.wrapper}>
        <div>
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
