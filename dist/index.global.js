/* @license MIT */
/* Content-Type: text/javascript */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.AvantosSdk = global.AvantosSdk || {}, global.React));
})(this, (function (exports, React) { 'use strict';

    const Button = ({ variant = 'primary', size = 'medium', children, onClick, }) => {
        const baseStyles = 'rounded-md font-semibold transition-colors';
        const variantStyles = {
            primary: 'bg-blue-500 text-white hover:bg-blue-600',
            secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        };
        const sizeStyles = {
            small: 'px-3 py-1 text-sm',
            medium: 'px-4 py-2',
            large: 'px-6 py-3 text-lg',
        };
        return (React.createElement("button", { className: `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`, onClick: onClick, type: "button" }, children));
    };

    exports.Button = Button;

}));
//# sourceMappingURL=index.global.js.map
