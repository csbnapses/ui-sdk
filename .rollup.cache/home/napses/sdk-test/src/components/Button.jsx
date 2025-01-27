import React from 'react';
import styles from './Button.module.css';
export const Button = ({ variant = 'primary', size = 'medium', children, onClick, }) => {
    return (<button className={`${styles.button} ${styles[variant]} ${styles[size]}`} onClick={onClick} type="button">
            {children}
        </button>);
};
//# sourceMappingURL=Button.jsx.map