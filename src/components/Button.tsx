import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    children: React.ReactNode;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'medium',
    children,
    onClick,
}) => {
    return (
        <button
            className={`${styles.button} ${styles[variant]} ${styles[size]}`}
            onClick={onClick}
            type="button"
        >
            {children}
        </button>
    );
}; 