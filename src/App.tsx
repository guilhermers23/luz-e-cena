import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";

const App = () => {
  return (
    <>
      <Header />
      <Banner src="\imagens\Banner Desktop.png" alt="Banner"
        text1="Onde a realidade" text2="encontra a fantasia!" />
      <MovieSection />
    </>
  )
};

export default App;