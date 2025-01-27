(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define('@avantos/ui-sdk', ['exports', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.AvantosSdk = {}, global.React));
})(this, (function (exports, React) { 'use strict';

  function styleInject(css, ref) {
    if (ref === undefined) ref = {};
    var insertAt = ref.insertAt;
    if (!css || typeof document === 'undefined') {
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

  var css_248z$1 = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.avantos-sdk-root .avantos-inline-flex{display:inline-flex}.avantos-sdk-root .avantos-appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.avantos-sdk-root .avantos-items-center{align-items:center}.avantos-sdk-root .avantos-justify-center{justify-content:center}.avantos-sdk-root .avantos-rounded-md{border-radius:.375rem}.avantos-sdk-root .avantos-border-0{border-width:0}.avantos-sdk-root .avantos-bg-blue-500{--tw-bg-opacity:1;background-color:rgb(59 130 246/var(--tw-bg-opacity,1))}.avantos-sdk-root .avantos-bg-blue-600{--tw-bg-opacity:1;background-color:rgb(37 99 235/var(--tw-bg-opacity,1))}.avantos-sdk-root .avantos-bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity,1))}.avantos-sdk-root .avantos-bg-gray-300{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity,1))}.avantos-sdk-root .avantos-px-3{padding-left:.75rem;padding-right:.75rem}.avantos-sdk-root .avantos-px-4{padding-left:1rem;padding-right:1rem}.avantos-sdk-root .avantos-px-6{padding-left:1.5rem;padding-right:1.5rem}.avantos-sdk-root .avantos-py-1{padding-bottom:.25rem;padding-top:.25rem}.avantos-sdk-root .avantos-py-3{padding-bottom:.75rem;padding-top:.75rem}.avantos-sdk-root .avantos-font-semibold{font-weight:600}.avantos-sdk-root .avantos-text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity,1))}.avantos-sdk-root .avantos-text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.avantos-sdk-root .avantos-outline-none{outline:2px solid transparent;outline-offset:2px}.avantos-sdk-root{all:initial!important;display:block!important;font-family:system-ui,-apple-system,sans-serif!important}.avantos-sdk-root,.avantos-sdk-root *{box-sizing:border-box!important}.avantos-sdk-root button{all:unset!important;align-items:center!important;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;background:none!important;border:none!important;cursor:pointer!important;display:inline-flex!important;font-family:inherit!important;justify-content:center!important;margin:0!important;outline:none!important;padding:0!important;position:relative!important}.avantos-text-white{color:#fff!important}.avantos-text-gray-800{color:#1f2937!important}.avantos-bg-blue-500{background-color:#3b82f6!important}.avantos-bg-blue-600{background-color:#2563eb!important}.avantos-bg-gray-200{background-color:#e5e7eb!important}.avantos-bg-gray-300{background-color:#d1d5db!important}";
  styleInject(css_248z$1);

  var css_248z = ".Button-module__button___BiD3F{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.375rem;border-width:0;cursor:pointer;display:inline-flex;font-weight:600;justify-content:center;outline:2px solid transparent;outline-offset:2px;transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.Button-module__primary___ypFor{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(59 130 246/var(--tw-bg-opacity,1));color:rgb(255 255 255/var(--tw-text-opacity,1))}.Button-module__primary___ypFor:hover{--tw-bg-opacity:1;background-color:rgb(37 99 235/var(--tw-bg-opacity,1))}.Button-module__secondary___74qS3{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity,1));color:rgb(31 41 55/var(--tw-text-opacity,1))}.Button-module__secondary___74qS3:hover{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity,1))}.Button-module__small___fs6VA{font-size:.875rem;line-height:1.25rem;padding:.25rem .75rem}.Button-module__medium___Kw6T9{padding:.5rem 1rem}.Button-module__large___zSYbr{font-size:1.125rem;line-height:1.75rem;padding:.75rem 1.5rem}";
  var styles = {"button":"Button-module__button___BiD3F","primary":"Button-module__primary___ypFor","secondary":"Button-module__secondary___74qS3","small":"Button-module__small___fs6VA","medium":"Button-module__medium___Kw6T9","large":"Button-module__large___zSYbr"};
  styleInject(css_248z);

  const Button = ({
    variant = 'primary',
    size = 'medium',
    children,
    onClick
  }) => {
    return /*#__PURE__*/React.createElement("button", {
      className: `${styles.button} ${styles[variant]} ${styles[size]}`,
      onClick: onClick,
      type: "button"
    }, children);
  };

  exports.Button = Button;

}));
//# sourceMappingURL=index.global.js.map
