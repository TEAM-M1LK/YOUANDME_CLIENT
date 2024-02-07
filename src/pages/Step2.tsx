import { useAtom } from "jotai";
import React from "react";
import { context } from "../context";
import Input from "../components/Input";
import { particle, 조사 } from "auto-particle";
import Provider from "../Provider";
import Button from "../components/Button";
import { useStep } from "../hooks/useStep";
import Header from "../components/Header";

const Step2 = () => {
  const { navigateNext } = useStep();
  const [info, setInfo] = useAtom(context);

  return (
    <Provider>
      <Header content="2/4" />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full h-full flex flex-col px-10 py-2 gap-10"
      >
        <span className="text-2xl font-bold">
          {particle(info.my_name).name(조사.아_야)}, 반가워!
          <br />
          상대방의 이름은 뭐야?
        </span>
        <Input
          title="상대방의 카톡 이름을 입력해줘!"
          placeholder="ex) 유정"
          onChange={({ target: { value } }) =>
            setInfo((prev) => ({ ...prev, your_name: value }))
          }
          value={info.your_name}
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

export default Step2;
