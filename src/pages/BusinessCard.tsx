import React from "react";
import Logo from "../icons/Logo";

const Notice = ({
  title,
  content,
  src,
  href,
}: {
  title: string;
  content: string;
  src: string;
  href: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="cursor-pointer w-80 flex items-center gap-4 px-6 py-4 border-[1px] border-solid border-[#ccc] rounded-lg"
    >
      <img className="w-8" src={src} alt="notion" />
      <div className="flex flex-col">
        <span className="text-lg font-bold">{title}</span>
        <span className="text-sm text-[#666]">{content}</span>
      </div>
    </a>
  );
};

const BusinessCard = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col py-10 gap-10">
      <header className="flex justify-center gap-4 flex-col items-center">
        <hgroup className="flex items-center gap-2">
          <Logo className="w-8" />
          <h1 className="text-3xl font-extrabold">너랑나랑</h1>
        </hgroup>
        <span className="text-base font-semibold text-center">
          부산소프트웨어마이스터고등학교
          <br />
          3학년 박우빈, 배유정
        </span>
        <span className="text-sm font-semibold text-[#aaa]">
          제작 기간 · 3일
        </span>
      </header>
      <main className="w-full flex gap-10 items-center flex-col px-10">
        <div className="flex flex-col gap-4">
          <Notice
            href="/onboarding"
            title="너랑나랑 직접 사용해보기"
            content="직접 너랑나랑을 사용해볼 수 있어요!"
            src="/assets/logo.png"
          />
          <Notice
            href="#"
            title="너랑나랑 더 알아보기"
            content="클릭하면 노션 보고서로 이동해요"
            src="/assets/notion.png"
          />
          <Notice
            href="https://github.com/Team-M1LK"
            title="깃허브 바로가기"
            content="깃허브 오가니제이션으로 이동해요"
            src="/assets/github.png"
          />
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-xl font-bold">백엔드를 주로 담당했어요</h1>
          <img className="w-96" src="/assets/baeyujeong.png" alt="" />
          <Notice
            href="https://cautious-cheek-877.notion.site/4ba5f0289fe84eb2a633b8fce91f79c0?pvs=4"
            title="이력서 보러가기"
            content="클릭하면 노션 이력서로 이동해요"
            src="/assets/notion.png"
          />
          <Notice
            href="https://github.com/Yujeong12"
            title="깃허브 바로가기"
            content="@Yujeong12"
            src="/assets/github.png"
          />
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-xl font-bold">프론트엔드를 주로 담당했어요</h1>
          <img className="w-96" src="/assets/parkwoobin.png" alt="" />
          <Notice
            href="https://parkubin.notion.site/parkubin/a71d9b12489e4a93ab2d7c51b9b1e00b"
            title="이력서 보러가기"
            content="클릭하면 노션 이력서로 이동해요"
            src="/assets/notion.png"
          />
          <Notice
            href="https://github.com/ubinquitous"
            title="깃허브 바로가기"
            content="@Ubinquitous"
            src="/assets/github.png"
          />
        </div>
      </main>
    </div>
  );
};

export default BusinessCard;
