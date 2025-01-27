/* @license MIT */
/* Content-Type: text/javascript */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.AvantosSdk = global.AvantosSdk || {}, global.React));
})(this, (function (exports, React) { 'use strict';

    const Button = ({ variant = 'primary', size = 'medium', children, onClick, }) => {
        const baseStyles = 'avantos-rounded-md avantos-font-semibold avantos-transition-colors';
        const variantStyles = {
            primary: 'avantos-bg-blue-500 avantos-text-white hover:avantos-bg-blue-600',
            secondary: 'avantos-bg-gray-200 avantos-text-gray-800 hover:avantos-bg-gray-300',
        };
        const sizeStyles = {
            small: 'avantos-px-3 avantos-py-1 avantos-text-sm',
            medium: 'avantos-px-4 avantos-py-2',
            large: 'avantos-px-6 avantos-py-3 avantos-text-lg',
        };
        return (React.createElement("button", { className: `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`, onClick: onClick, type: "button" }, children));
    };

    exports.Button = Button;

}));
//# sourceMappingURL=index.global.js.map
