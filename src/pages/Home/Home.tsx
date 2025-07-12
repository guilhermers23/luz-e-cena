import Banner from "../../components/Banner";
import Header from "../../components/Header";
import MovieSection from "../../components/MovieSection";
import Newsletter from "../../components/Newsletter";

const Home = () => (
    <>
        <Header />
        <Banner src="\imagens\Banner Desktop.png" alt="Banner" />
        <MovieSection />
        <Banner src="\imagens\Banner Combo Desktop.png" alt="Banner Combo" />
        <Newsletter />
    </>
);

export default Home;
