import React, { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ title, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <span className="text-lg font-semibold">{title}</span>
        <input
          ref={ref}
          className="px-4 py-3 outline-none rounded-lg font-semibold border-[1px] border-solid border-[#aaa]"
          {...props}
        />
      </div>
    );
  }
);

export default Input;
