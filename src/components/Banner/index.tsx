import * as S from "./Banner.styled";

interface BannerProps {
    src: string;
    alt: string;
    text1: string;
    text2: string;
}

const Banner = ({ src, alt, text1, text2 }: BannerProps) => {
    return (
        <>
            <S.Banner src={src} alt={alt} />
            <S.Title>
                <span>{text1}</span> {text2}
            </S.Title>
        </>
    )
};

export default Banner;
