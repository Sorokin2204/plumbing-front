import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';
import clsx from 'clsx';
import Header from '../../components/site/Header/Header';
import HeaderBottom from '../../components/site/HeaderBottom/HeaderBottom';
import MainNews from '../../components/site/MainNews/MainNews';
import HomeNavigation from '../../components/site/HomeNavigation/HomeNavigation';
import HomeBanners from '../../components/site/HomeBanners/HomeBanners';
import Footer from '../../components/site/Footer/Footer';
const HomePage = () => {
  return (
    <>
      <div class="container">
        <Header />
        <HeaderBottom />
        <MainNews />
        <HomeNavigation />
        <HomeBanners />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
