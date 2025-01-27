// src/components/Button.tsx
import React from "react";
var Button = ({
  variant = "primary",
  size = "medium",
  children,
  onClick
}) => {
  const baseStyles = "rounded-md font-semibold transition-colors";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
  };
  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg"
  };
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      className: `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`,
      onClick,
      type: "button"
    },
    children
  );
};
export {
  Button
};
