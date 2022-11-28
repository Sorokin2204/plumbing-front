import Footer from './components/site/Footer/Footer';
import Header from './components/site/Header/Header';
import HeaderBottom from './components/site/HeaderBottom/HeaderBottom';
import HomeBanners from './components/site/HomeBanners/HomeBanners';
import HomeNavigation from './components/site/HomeNavigation/HomeNavigation';
import MainNews from './components/site/MainNews/MainNews';

function App() {
  return (
    <div className="App">
      <div class="container">
        <Header />
        <HeaderBottom />
        <MainNews />
        <HomeNavigation />
        <HomeBanners />
      </div>
      <Footer />
    </div>
  );
}

export default App;
