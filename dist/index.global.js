/* @license MIT */
/* Content-Type: text/javascript */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.AvantosSdk = global.AvantosSdk || {}, global.React));
})(this, (function (exports, React) { 'use strict';

    const Button = ({ variant = 'primary', size = 'medium', children, onClick, }) => {
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
        return (React.createElement("button", { className: `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`, onClick: onClick, type: "button" }, children));
    };

    exports.Button = Button;

}));
//# sourceMappingURL=index.global.js.map
