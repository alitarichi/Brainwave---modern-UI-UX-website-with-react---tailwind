import React from "react";

const Section = ({
  className,
  id,
  crosses,
  crossOffset,
  customPaddings,
  children,
}) => {
  return (
    <div
      className={`relative ${
        customPaddings ||
        `py-10
  lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}
   ${className || ""}`
      }`}
    >
      {children}
    </div>
  );
};

export default Section;
