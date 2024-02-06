import classNames from "classnames";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  chiildren?: ReactNode;
}

const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(
        " text-lg rounded-lg text-white font-semibold py-4 px-10 ",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
