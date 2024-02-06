import React from "react";
import Provider from "../Provider";
import { useAtom } from "jotai";
import { context } from "../context";
import { useStep } from "../hooks/useStep";
import { particle, 조사 } from "auto-particle";
import CheckBox from "../components/CheckBox";
import Button from "../components/Button";
import Header from "../components/Header";

const Step3 = () => {
  const { navigateNext } = useStep();
  const [info, setInfo] = useAtom(context);

  return (
    <Provider>
      <Header content="3/4" />
      <div className="w-full h-full flex flex-col px-10 py-2 gap-10">
        <span className="text-2xl font-bold">
          좋아, 네 생각에 {particle(info.you).name(조사.이_랑)} <br />
          너는 어떤 사이인것 같아?
        </span>
        <main className="flex flex-col gap-4">
          <span className="text-xl font-semibold text-[#666]">우리는...</span>
          <div className="flex flex-col w-full cursor-pointer gap-6">
            {["비즈니스", "친구", "썸", "연인"].map((relation) => (
              <CheckBox
                key={relation}
                onClick={() =>
                  setInfo((prev) => ({ ...prev, guess_relation: relation }))
                }
                content={`${relation}인 것 같아!`}
                isChecked={info.guess_relation === relation}
              />
            ))}
          </div>
          <Button
            className="bg-[#FF61BF] w-[80%] absolute bottom-14"
            onClick={navigateNext}
          >
            다음
          </Button>
        </main>
      </div>
    </Provider>
  );
};

export default Step3;
