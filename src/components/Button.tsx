import React from 'react';

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
    const baseStyles = 'tw-rounded-md tw-font-semibold tw-transition-colors';
    const variantStyles = {
        primary: 'tw-bg-blue-500 tw-text-white hover:tw-bg-blue-600',
        secondary: 'tw-bg-gray-200 tw-text-gray-800 hover:tw-bg-gray-300',
    };
    const sizeStyles = {
        small: 'tw-px-3 tw-py-1 tw-text-sm',
        medium: 'tw-px-4 tw-py-2',
        large: 'tw-px-6 tw-py-3 tw-text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
            onClick={onClick}
            type="button"
        >
            {children}
        </button>
    );
}; 