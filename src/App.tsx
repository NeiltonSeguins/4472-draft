import Banner from "./components/Banner/index";
import Header from "./components/Header";
import MoviesSection from "./components/MoviesSection";
import Newsletter from "./components/Newsletter";
function App() {
  return (
    <>
      <Header />
      <Banner src="/banner.png" alt="Banner" />
      <MoviesSection />
      <Banner src="/combo.png" alt="Combo" />
      <Newsletter />
      <Banner src="tarja.png" alt="Tarja" />
    </>
  );
}

export default App;
