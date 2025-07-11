import * as S from "./Link.styled";

const Link = ({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <S.Link {...props}>{children}</S.Link>
);

export default Link;