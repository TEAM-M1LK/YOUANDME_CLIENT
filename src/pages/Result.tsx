import { useAtom } from "jotai";
import React, { useRef } from "react";
import { resultContext } from "../context";
import Provider from "../Provider";
import Logo from "../icons/Logo";
import { particle, 조사 } from "auto-particle";
import Chat from "../components/Chat";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import BarGraph from "../components/BarGraph";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const [result] = useAtom(resultContext);
  const navigate = useNavigate();

  ChartJS.register(ArcElement, Tooltip, Legend);

  return (
    <Provider>
      <div className="w-full h-full flex flex-col p-10 gap-20 items-center z-50">
        <hgroup className="flex flex-col items-center gap-2">
          <span className="text-xl font-bold text-[#aaa]">
            {particle(result.me_name).name(조사.이_와)}{" "}
            {particle(result.you_name).name(조사.이_의)} 사이는...
          </span>
          <span className="text-3xl font-bold text-center">
            아주아주 친한친한
            <br />
            친한친한신한은행 상태
          </span>
        </hgroup>
        <div id="채팅 한마디" className="w-full flex flex-col gap-8 ">
          <main className="w-full flex flex-col gap-2">
            <span className="ml-auto font-semibold">{result.me_name}</span>
            <Chat author="me">
              <img
                className="transition-all w-32 duration-300 ease-in-out group-hover:scale-110"
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beaming%20Face%20with%20Smiling%20Eyes.png"
                alt="Beaming Face with Smiling Eyes"
              />
            </Chat>
            <Chat author="me">마 소주 한쌔가리 뿜삐까자~~!</Chat>
          </main>
          <main className="w-full flex flex-col gap-2">
            <span className="mr-auto font-semibold">{result.you_name}</span>
            <Chat author="you">
              <img
                className="transition-all w-32 duration-300 ease-in-out group-hover:scale-110"
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Grinning%20Face%20with%20Big%20Eyes.png"
                alt="Grinning Face with Big Eyes"
              />
            </Chat>
            <Chat author="you">그래 마 함가뿌삐까끼자!</Chat>
          </main>
        </div>
        <div id="X가 생각하는 Y는" className="flex flex-col gap-6">
          <span className="text-2xl font-bold text-center">
            {particle(result.me_name).name(조사.이_가)} 생각하는{" "}
            {particle(result.you_name).name(조사.은_는)}
          </span>
          <Doughnut
            data={{
              labels: ["친구", "썸", "커플", "비즈니스"],
              datasets: [
                {
                  label: "우리 사이",
                  data: [1, 1, 1, 1],
                  backgroundColor: ["#A259FF", "#FF61BF", "#FF6161", "#599BFF"],
                  hoverOffset: 4,
                },
              ],
            }}
          />
          <span className="text-lg text-center font-semibold">
            naskcnksanclkancklancvl
          </span>
        </div>
        <div id="Y가 생각하는 X는" className="flex flex-col gap-6">
          <span className="text-2xl font-bold text-center">
            {particle(result.you_name).name(조사.이_가)} 생각하는{" "}
            {particle(result.me_name).name(조사.은_는)}
          </span>
          <Doughnut
            data={{
              labels: ["친구", "썸", "커플", "비즈니스"],
              datasets: [
                {
                  label: "우리 사이",
                  data: [1, 1, 1, 1],
                  backgroundColor: ["#A259FF", "#FF61BF", "#FF6161", "#599BFF"],
                  hoverOffset: 4,
                },
              ],
            }}
          />
          <span className="text-lg text-center font-semibold">
            askdsakcnaslkcklna
          </span>
        </div>
        <div className="w-full flex flex-col gap-14">
          <div className="w-full flex flex-col items-center gap-8">
            <span className="text-2xl text-center font-bold">
              {particle(result.me_name).name(조사.이_가)} 더 자주 연락하는구나?
            </span>
            <BarGraph me={result.me_name} you={result.you_name} percent={72} />
          </div>
          <div className="w-full flex flex-col items-center gap-8">
            <span className="text-2xl text-center font-bold">
              답장은 {particle(result.you_name).name(조사.이_가)} 더 빠르네~
            </span>
            <BarGraph me={result.me_name} you={result.you_name} percent={41} />
          </div>
        </div>
        <Logo />
        <div className="flex flex-col gap-2">
          <span className="text-2xl text-center font-bold">
            너가 생각한 것과 똑같이,
            <br /> 너와 {particle(result.you_name).name(조사.은_는)} 친구인 것
            같아!
          </span>
          <span className="text-center text-base text-[#aaa] font-semibold">
            결과를 너무 깊게 생각하진 말아줘!
          </span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Button
            className="bg-[#FF61BF] w-full"
            onClick={() => navigate("/onboarding")}
          >
            다시하기!
          </Button>
          <div className="text-center text-lg font-semibold">
            테스트해줘서 고마워! 관심이 있다면
            <br /> 왼쪽의 QR코드로 명함을 받아볼 수 있어!!
          </div>
        </div>
        <div className="pb-8 w-full h-2" />
      </div>
    </Provider>
  );
};

export default Result;
