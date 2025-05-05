import React from "react";
import styles from "../SelectorGroup/SelectorGroup.module.css";

interface SelectorGroupProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    icon?: React.ReactNode;
};

const SelectorGroup = ({ icon, children, ...props }: SelectorGroupProps) => {
    return (
        <div className={styles.container}>
            {icon && <div className={styles.icone}>{icon}</div>}
            <select className={styles.selector} {...props}>{children}</select>
        </div>
    )
};

export default SelectorGroup;