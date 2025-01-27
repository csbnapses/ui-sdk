import React from 'react';

interface ButtonProps {
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    children: React.ReactNode;
    onClick?: () => void;
}
declare const Button: React.FC<ButtonProps>;

export { Button };
