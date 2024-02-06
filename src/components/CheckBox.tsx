import classNames from "classnames";
import React, { HTMLAttributes } from "react";

interface CheckBoxProps extends HTMLAttributes<HTMLDivElement> {
  content: string;
  isChecked?: boolean;
  isWarning?: boolean;
  textClassName?: string;
}

const CheckBox = ({
  content,
  isChecked,
  isWarning,
  textClassName,
  ...props
}: CheckBoxProps) => {
  return (
    <div
      {...props}
      className="w-full h-fit py-5 px-5 shadow-input rounded-lg flex items-center"
    >
      <span className={classNames("text-lg font-semibold", textClassName)}>
        {content}
      </span>
      <img
        className="ml-auto"
        src={
          isWarning
            ? "/assets/x.svg"
            : isChecked
            ? "/assets/check.svg"
            : "/assets/uncheck.svg"
        }
        alt="check"
      />
    </div>
  );
};

export default CheckBox;
