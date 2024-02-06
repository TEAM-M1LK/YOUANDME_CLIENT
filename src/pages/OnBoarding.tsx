import React from "react";
import Provider from "../Provider";
import Logo from "../icons/Logo";
import Button from "../components/Button";
import Chat from "../components/Chat";
import { useStep } from "../hooks/useStep";

const OnBoarding = () => {
  const { navigateNext } = useStep();
  return (
    <Provider>
      <div className="w-full h-full flex flex-col py-16 px-12 gap-20 items-center">
        <hgroup className="flex flex-col gap-2 mr-auto">
          <div className="flex gap-2 w-full">
            <Logo className="w-10 h-fit" />
            <h1 className="text-4xl font-extrabold">너랑나랑</h1>
          </div>
          <span className="text-2xl font-semibold text-[#888]">
            무슨 사이인지 확인해봐!
          </span>
        </hgroup>
        <main className="w-full flex flex-col gap-3">
          <div className="flex-col w-full flex gap-1">
            <Chat author="me">지금 뭐해?</Chat>
            <span className="ml-auto text-sm text-[#999]">썸 58%</span>
          </div>
          <div className="flex-col w-full flex gap-1">
            <Chat author="you">나 걍 누워있는데 왜?</Chat>
          </div>
          <div className="flex-col w-full flex gap-1">
            <Chat author="you">딱히 할게 없다 ㅋㅋ</Chat>
            <span className="mr-auto text-sm text-[#999]">친구 82%</span>
          </div>
          <div className="flex-col w-full flex gap-1">
            <Chat author="me">아그래? ㅋㄹㅋㅎㅋㅎㅋ</Chat>
            <span className="ml-auto text-sm text-[#999]">연인 61%</span>
          </div>
        </main>
        <Button
          className="bg-[#FF61BF] w-[80%] absolute bottom-14"
          onClick={navigateNext}
        >
          시작하기
        </Button>
      </div>
    </Provider>
  );
};

export default OnBoarding;
