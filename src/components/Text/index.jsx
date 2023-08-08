import React from "react";

const sizeClasses = {
  txtInterBold14: "font-bold font-inter",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterRegular15WhiteA700: "font-inter font-normal",
  txtInterSemiBold14Gray900: "font-inter font-semibold",
  txtInterBold26: "font-bold font-inter",
  txtInterBold26Black900: "font-bold font-inter",
  txtInterSemiBold15: "font-inter font-semibold",
  txtInterSemiBold26: "font-inter font-semibold",
  txtInterSemiBold14WhiteA700: "font-inter font-semibold",
  txtInterSemiBold12: "font-inter font-semibold",
  txtInterSemiBold56: "font-inter font-semibold",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular14Gray700: "font-inter font-normal",
  txtInterRegular15: "font-inter font-normal",
  txtInterSemiBold12Indigo900: "font-inter font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
