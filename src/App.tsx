import { Banner } from "./components/Banner";
import { Link } from "./components/Link";

export const App = () => {
  return (
    <>
      <Banner src="\imagens\Banner Desktop.png" alt="Banner"
        text1="Onde a realidade" text2="encontra a fantasia!" />
      <Link href="#" target="_blank">Exemplo Link</Link>
    </>
  )
};
