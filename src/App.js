import { useRoutes } from 'react-router';
import MainLayout from './components/admin/MainLayout/MainLayout';
import Footer from './components/site/Footer/Footer';
import Header from './components/site/Header/Header';
import HeaderBottom from './components/site/HeaderBottom/HeaderBottom';
import HomeBanners from './components/site/HomeBanners/HomeBanners';
import HomeNavigation from './components/site/HomeNavigation/HomeNavigation';
import MainNews from './components/site/MainNews/MainNews';
import SiteLayout from './components/site/SiteLayout/SiteLayout';
import AdminHouseCreate from './pages/admin/AdminHouseCreate/AdminHouseCreate';
import AdminHouseList from './pages/admin/AdminHouseList/AdminHouseList';
import AdminHouseUpdate from './pages/admin/AdminHouseUpdate/AdminHouseUpdate';
import AdminLogin from './pages/admin/AdminLogin/AdminLogin';
import AdminNewsCreate from './pages/admin/AdminNewsCreate/AdminNewsCreate';
import AdminNewsList from './pages/admin/AdminNewsList/AdminNewsList';
import AdminNewsUpdate from './pages/admin/AdminNewsUpdate/AdminNewsUpdate';
import AdminPageCreate from './pages/admin/AdminPageCreate/AdminPageCreate';
import AdminPageList from './pages/admin/AdminPageList/AdminPageList';
import AdminPageUpdate from './pages/admin/AdminPageUpdate/AdminPageUpdate';
import HomePage from './pages/site/HomePage';
import HouseListPage from './pages/site/HouseListPage';
import HousePage from './pages/site/HousePage';
import NewsListPage from './pages/site/NewsListPage';
import NewsPage from './pages/site/NewsPage';
import SimplePage from './pages/site/SimplePage';

function App() {
  let routes = useRoutes([
    {
      path: '/',
      element: (
        <SiteLayout>
          <HomePage />
        </SiteLayout>
      ),
    },
    {
      path: '/:slug',
      element: (
        <SiteLayout>
          <SimplePage />
        </SiteLayout>
      ),
    },
    {
      path: 'news/list',
      element: (
        <SiteLayout>
          <NewsListPage />
        </SiteLayout>
      ),
    },
    {
      path: '/news/:slug',
      element: (
        <SiteLayout>
          <NewsPage />
        </SiteLayout>
      ),
    },
    {
      path: 'house/list',
      element: (
        <SiteLayout>
          <HouseListPage />
        </SiteLayout>
      ),
    },

    {
      path: 'house/:slug',
      element: (
        <SiteLayout>
          <HousePage />
        </SiteLayout>
      ),
    },
    {
      path: '/admin/page/create',
      element: (
        <MainLayout>
          <AdminPageCreate />
        </MainLayout>
      ),
    },
    {
      path: '/admin/login',
      element: <AdminLogin />,
    },
    {
      path: '/admin/house/update/:slug',
      element: (
        <MainLayout>
          <AdminHouseUpdate />
        </MainLayout>
      ),
    },
    {
      path: '/admin/page/update/:slug',
      element: (
        <MainLayout>
          <AdminPageUpdate />
        </MainLayout>
      ),
    },
    {
      path: '/admin/news/create',
      element: (
        <MainLayout>
          <AdminNewsCreate />
        </MainLayout>
      ),
    },
    {
      path: '/admin/news/update/:slug',
      element: (
        <MainLayout>
          <AdminNewsUpdate />
        </MainLayout>
      ),
    },
    {
      path: '/admin/house/create',
      element: (
        <MainLayout>
          <AdminHouseCreate />
        </MainLayout>
      ),
    },
    {
      path: '/admin/house/create',
      element: (
        <MainLayout>
          <AdminHouseCreate />
        </MainLayout>
      ),
    },
    {
      path: 'admin/pages',
      element: (
        <MainLayout>
          <AdminPageList />
        </MainLayout>
      ),
    },
    {
      path: 'admin/news',
      element: (
        <MainLayout>
          <AdminNewsList />
        </MainLayout>
      ),
    },
    {
      path: 'admin/houses',
      element: (
        <MainLayout>
          <AdminHouseList />
        </MainLayout>
      ),
    },
  ]);
  // return (
  //   <div className="App">
  //     <div class="container">
  //       <Header />
  //       <HeaderBottom />
  //       <MainNews />
  //       <HomeNavigation />
  //       <HomeBanners />
  //     </div>
  //     <Footer />
  //   </div>
  // );
  return routes;
}

export default App;
