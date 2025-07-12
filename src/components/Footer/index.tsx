import FooterInfos from "./components/FooterInfos";
import FooterLogo from "./components/FooterLogo";
import * as S from "./Footer.styled";

const Footer = () => (
    <S.Rodape>
        <S.RodapeInfos>
            <FooterLogo />
            <FooterInfos />
        </S.RodapeInfos>
    </S.Rodape>
);

export default Footer;
