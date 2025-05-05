import styles from "../Header.module.css";

const HeaderListItem = ({ children }: React.HTMLAttributes<HTMLUListElement>) => {
    return (
        <li className={styles.menuItem}>{children}</li>
    )
};

export default HeaderListItem;