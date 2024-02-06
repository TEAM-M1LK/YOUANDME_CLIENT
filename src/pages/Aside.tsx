import React from "react";
import Logo from "../icons/Logo";

const Aside = () => {
  return (
    <main className="flex flex-col items-center gap-20">
      <header className="flex justify-center gap-4 flex-col items-center">
        <hgroup className="flex items-center gap-4">
          <Logo className="w-16" />
          <h1 className="text-6xl font-extrabold">너랑나랑</h1>
        </hgroup>
        <span className="text-xl font-bold text-[#aaa]">
          두근두근, 무슨 사이인지 확인해봐!
        </span>
      </header>
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-col items-center border-[1px] border-solid border-[#ccc] rounded-lg p-4">
          <img className=" w-52" src="/assets/QR.png" alt="QR" />
        </div>
        <span className="text-lg font-semibold text-center">
          "너랑나랑" 더 알아보기 또는
          <br />
          개발자들의 명함 받아보기
        </span>
      </div>
    </main>
  );
};

export default Aside;
