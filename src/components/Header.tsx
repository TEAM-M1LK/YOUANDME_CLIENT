import React from "react";
import { useStep } from "../hooks/useStep";

const Header = ({ content }: { content: string }) => {
  const { navigatePrev } = useStep();
  return (
    <div className="w-full flex items-center px-7 py-6 ">
      <img
        onClick={navigatePrev}
        src="/assets/arrow.svg"
        alt="arrow"
        className="cursor-pointer"
      />
      <span className="ml-auto text-lg font-semibold text-[#aaa]">
        {content}
      </span>
    </div>
  );
};

export default Header;
