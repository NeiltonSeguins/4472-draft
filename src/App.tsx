import Banner from "./components/Banner/index";
import Header from "./components/Header";
// import ListaDeCards from "./componentes/ListaDeCards";
// import Newsletter from "./componentes/Newsletter";
// import Rodape from "./componentes/Rodape";
function App() {
  return (
    <>
      <Header />
      <Banner src="/banner.png" alt="Banner" />
      {/* <ListaDeCards /> */}
      <Banner src="/combo.png" alt="Combo" />
      {/* <Newsletter /> */}
      <Banner src="tarja.png" alt="Tarja" />
      {/* <Rodape /> */}
    </>
  );
}

export default App;
