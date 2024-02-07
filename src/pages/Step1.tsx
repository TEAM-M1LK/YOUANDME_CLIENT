import React from "react";
import Provider from "../Provider";
import Input from "../components/Input";
import { useAtom } from "jotai";
import { context } from "../context";
import Button from "../components/Button";
import { useStep } from "../hooks/useStep";
import Header from "../components/Header";

const Step1 = () => {
  const { navigateNext } = useStep();
  const [info, setInfo] = useAtom(context);

  return (
    <Provider>
      <Header content="1/4" />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full h-full flex flex-col px-10 py-2 gap-10"
      >
        <span className="text-2xl font-bold">
          만나서 반가워!
          <br />
          어떻게 불러주는게 편해?
        </span>
        <Input
          title="카카오톡에 저장된 너의 이름을 입력해줘!"
          placeholder="ex) 우빈"
          onChange={({ target: { value } }) =>
            setInfo((prev) => ({ ...prev, my_name: value }))
          }
          value={info.my_name}
        />
        <Button
          className="bg-[#FF61BF] w-[80%] absolute bottom-14"
          onClick={navigateNext}
        >
          다음
        </Button>
      </form>
    </Provider>
  );
};

export default Step1;
