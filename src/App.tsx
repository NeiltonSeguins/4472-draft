import Banner from "./components/Banner/index";
import Header from "./components/Header";
import MoviesSection from "./components/MoviesSection";
function App() {
  return (
    <>
      <Header />
      <Banner src="/banner.png" alt="Banner" />
      <MoviesSection />
      <Banner src="/combo.png" alt="Combo" />
      <Banner src="tarja.png" alt="Tarja" />
    </>
  );
}

export default App;
