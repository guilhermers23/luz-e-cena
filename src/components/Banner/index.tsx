import style from "./banner.module.css";

interface BannerProps {
    src: string;
    alt: string;
    text1: string;
    text2: string;
}

export const Banner = ({ src, alt, text1, text2 }: BannerProps) => {
    return (
        <>
            <img src={src} alt={alt} className={style.banner} />
            <h2 className={style.title}>
                <span>{text1}</span> {text2}</h2>
        </>
    )
};
