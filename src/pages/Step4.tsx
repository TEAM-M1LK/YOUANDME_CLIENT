import React, { ChangeEvent, useEffect, useRef } from "react";
import { useStep } from "../hooks/useStep";
import { useAtom } from "jotai";
import { context } from "../context";
import Provider from "../Provider";
import { particle, 조사 } from "auto-particle";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import { useParseContent } from "../hooks/useParseContent";
import Header from "../components/Header";

const Step4 = () => {
  const { navigateNext } = useStep();
  const [info] = useAtom(context);
  const { parseContent } = useParseContent();
  const fileRef = useRef<HTMLInputElement>(null);

  const handleUploadFileClick = () => {
    if (fileRef.current) fileRef.current.click();
  };

  const handleUploadFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      await parseContent(files[0]);
      navigateNext();
    }
  };

  return (
    <Provider>
      <Header content="4/4" />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full h-full flex flex-col px-10 py-2 gap-10"
      >
        <hgroup className="flex flex-col gap-2">
          <span className="text-2xl font-bold">
            마지막으로, {particle(info.your_name).name(조사.이_랑)}
            <br />
            대화한 내용을 보여줘!
          </span>
          <span className="text-lg font-semibold text-[#aaa]">
            내보내기한 대화내용을 업로드해줘!
          </span>
        </hgroup>
        <main className="flex flex-col gap-4">
          <span className="text-xl font-semibold text-[#666]">
            👍 더 정확한 결과를 얻고 싶다면
          </span>
          <div className="flex flex-col w-full cursor-pointer gap-6">
            {[
              "대화 내용이 길수록 결과가 정확해져!",
              "여러 날짜에 걸쳐 대화했다면 더욱 좋아!",
            ].map((content) => (
              <CheckBox
                textClassName="text-[14px]"
                key={content}
                content={content}
                isChecked
              />
            ))}
            {[
              "사진이 많으면 정확히 분석하기 어려워!",
              "단톡방보단 1:1로 대화한 내용을 올려줘!",
            ].map((content) => (
              <CheckBox
                textClassName="text-[14px]"
                key={content}
                content={content}
                isWarning
              />
            ))}
          </div>
        </main>
        <input
          type="file"
          onChange={handleUploadFileChange}
          ref={fileRef}
          className="hidden"
        />
        <Button
          className="bg-[#6E33F4] w-[80%] absolute bottom-14"
          onClick={handleUploadFileClick}
        >
          <span className="font-semibold">대화내용 업로드하기</span>
        </Button>
      </form>
    </Provider>
  );
};

export default Step4;
