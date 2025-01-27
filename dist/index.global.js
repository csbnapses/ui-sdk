(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define('@avantos/ui-sdk', ['exports', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.AvantosSdk = {}, global.React));
})(this, (function (exports, React) { 'use strict';

  function styleInject(css, ref) {
    if (ref === undefined) ref = {};
    var insertAt = ref.insertAt;
    if (typeof document === 'undefined') {
      return;
    }
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.avantos-rounded-md{border-radius:.375rem!important}.avantos-bg-blue-500{--tw-bg-opacity:1!important;background-color:rgb(59 130 246/var(--tw-bg-opacity,1))!important}.avantos-bg-gray-200{--tw-bg-opacity:1!important;background-color:rgb(229 231 235/var(--tw-bg-opacity,1))!important}.avantos-px-3{padding-left:.75rem!important;padding-right:.75rem!important}.avantos-px-4{padding-left:1rem!important;padding-right:1rem!important}.avantos-px-6{padding-left:1.5rem!important;padding-right:1.5rem!important}.avantos-py-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.avantos-py-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.avantos-py-3{padding-bottom:.75rem!important;padding-top:.75rem!important}.avantos-text-lg{font-size:1.125rem!important;line-height:1.75rem!important}.avantos-text-sm{font-size:.875rem!important;line-height:1.25rem!important}.avantos-font-semibold{font-weight:600!important}.avantos-text-gray-800{--tw-text-opacity:1!important;color:rgb(31 41 55/var(--tw-text-opacity,1))!important}.avantos-text-white{--tw-text-opacity:1!important;color:rgb(255 255 255/var(--tw-text-opacity,1))!important}.avantos-transition-colors{transition-duration:.15s!important;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important}.avantos-sdk-root{all:initial;display:block;font-family:system-ui,-apple-system,sans-serif}.avantos-sdk-root *{all:unset;box-sizing:border-box}.avantos-sdk-root button{background:none;border:none;cursor:pointer;display:inline-block;font-family:inherit;line-height:normal;margin:0;padding:0;text-align:center}.hover\\:avantos-bg-blue-600:hover{--tw-bg-opacity:1!important;background-color:rgb(37 99 235/var(--tw-bg-opacity,1))!important}.hover\\:avantos-bg-gray-300:hover{--tw-bg-opacity:1!important;background-color:rgb(209 213 219/var(--tw-bg-opacity,1))!important}";
  styleInject(css_248z,{"insertAt":"top"});

  const Button = ({
    variant = 'primary',
    size = 'medium',
    children,
    onClick
  }) => {
    const baseStyles = 'avantos-rounded-md avantos-font-semibold avantos-transition-colors';
    const variantStyles = {
      primary: 'avantos-bg-blue-500 avantos-text-white hover:avantos-bg-blue-600',
      secondary: 'avantos-bg-gray-200 avantos-text-gray-800 hover:avantos-bg-gray-300'
    };
    const sizeStyles = {
      small: 'avantos-px-3 avantos-py-1 avantos-text-sm',
      medium: 'avantos-px-4 avantos-py-2',
      large: 'avantos-px-6 avantos-py-3 avantos-text-lg'
    };
    return /*#__PURE__*/React.createElement("button", {
      className: `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`,
      onClick: onClick,
      type: "button"
    }, children);
  };

  exports.Button = Button;

}));
//# sourceMappingURL=index.global.js.map
