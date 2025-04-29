import styles from "./Link.module.css";

export const Link = ({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    return (
        <a className={styles.link} {...props}>{children}</a>
    )
};
