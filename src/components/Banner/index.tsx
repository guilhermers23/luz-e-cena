import * as S from "./Banner.styled";

interface BannerProps {
    src: string;
    alt: string;
}

const Banner = ({ src, alt }: BannerProps) => (
    <S.Banner src={src} alt={alt} />
);

export default Banner;
