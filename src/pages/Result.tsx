import { useAtom } from "jotai";
import { context, defaultContext, resultContext } from "../context";
import Provider from "../Provider";
import Logo from "../icons/Logo";
import { particle, 조사 } from "auto-particle";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import BarGraph from "../components/BarGraph";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useResult } from "../hooks/useResult";

const Result = () => {
  const [, setInfo] = useAtom(context);
  const [result] = useAtom(resultContext);
  const { getFinallyRelation, getChatting, getKoreanRelation, getConclusion } =
    useResult(result);
  const navigate = useNavigate();

  ChartJS.register(ArcElement, Tooltip, Legend);

  return (
    <Provider>
      <div className="w-full h-full flex flex-col p-10 gap-20 items-center z-50">
        <hgroup className="flex flex-col items-center gap-2">
          <span className="text-xl font-bold text-[#aaa]">
            {particle(result.my.name).name(조사.이_와)}{" "}
            {particle(result.you.name).name(조사.이_의)} 사이는...
          </span>
          <span className="text-3xl font-bold text-center">
            {getFinallyRelation()}
          </span>
        </hgroup>
        <div id="채팅 한마디" className="w-full flex flex-col gap-8 ">
          {getChatting()}
        </div>
        <div id="X가 생각하는 Y는" className="flex flex-col gap-6">
          <span className="text-2xl font-bold text-center">
            {particle(result.my.name).name(조사.이_가)} 생각하는{" "}
            {particle(result.you.name).name(조사.은_는)}
          </span>
          <Doughnut
            data={{
              labels: ["친구", "썸", "커플", "비즈니스"],
              datasets: [
                {
                  label: "우리 사이",
                  data: [
                    result.my.result.friend,
                    result.my.result.some,
                    result.my.result.lover,
                    result.my.result.business,
                  ],
                  backgroundColor: ["#A259FF", "#FF61BF", "#FF6161", "#599BFF"],
                  hoverOffset: 4,
                },
              ],
            }}
          />
          <span className="text-lg text-center font-semibold">
            넌 {particle(result.you.name).name(조사.을_를)}{" "}
            {particle(getKoreanRelation(result.my.final_relation)).word(
              조사.으_로
            )}{" "}
            생각하고 있구나!
          </span>
        </div>
        <div id="Y가 생각하는 X는" className="flex flex-col gap-6">
          <span className="text-2xl font-bold text-center">
            {particle(result.you.name).name(조사.이_가)} 생각하는{" "}
            {particle(result.my.name).name(조사.은_는)}
          </span>
          <Doughnut
            data={{
              labels: ["친구", "썸", "커플", "비즈니스"],
              datasets: [
                {
                  label: "우리 사이",
                  data: [
                    result.you.result.friend,
                    result.you.result.some,
                    result.you.result.lover,
                    result.you.result.business,
                  ],
                  backgroundColor: ["#A259FF", "#FF61BF", "#FF6161", "#599BFF"],
                  hoverOffset: 4,
                },
              ],
            }}
          />
          <span className="text-lg text-center font-semibold">
            {particle(result.you.name).name(조사.은_는)} 너를{" "}
            {particle(getKoreanRelation(result.you.final_relation)).word(
              조사.으_로
            )}{" "}
            생각하고 있어!
          </span>
        </div>
        <div className="w-full flex flex-col gap-14">
          <div className="w-full flex flex-col items-center gap-8">
            <span className="text-2xl text-center font-bold">
              {particle(result.more_alot_chatter).name(조사.이_가)} 더 자주
              연락하는구나?
            </span>
            <BarGraph
              me={result.my.name}
              you={result.you.name}
              percent={Math.round(
                (result.my.conversation_count /
                  (result.my.conversation_count +
                    result.you.conversation_count)) *
                  100
              )}
            />
          </div>
          <div className="w-full flex flex-col items-center gap-8">
            <span className="text-2xl text-center font-bold">
              답장은 {particle(result.more_faster_replier).name(조사.이_가)} 더
              빠르네~
            </span>
            <BarGraph
              me={result.my.name}
              you={result.you.name}
              percent={Math.round(
                (result.my.reply_time_average /
                  (result.my.reply_time_average +
                    result.you.reply_time_average)) *
                  100
              )}
            />
          </div>
        </div>
        <Logo />
        <div className="flex flex-col gap-2">
          <span className="text-2xl text-center font-bold">
            {getConclusion()}
          </span>
          <span className="text-center text-base text-[#aaa] font-semibold">
            결과를 너무 깊게 생각하진 말아줘!
          </span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Button
            className="bg-[#FF61BF] w-full"
            onClick={() => {
              setInfo(defaultContext);
              navigate("/onboarding");
            }}
          >
            다시하기!
          </Button>
          <div className="text-center text-lg font-semibold">
            테스트해줘서 고마워! 관심이 있다면
            <br /> 왼쪽의 QR코드로 명함을 받아볼 수 있어!!
          </div>
          <div
            onClick={() => navigate("/business/card")}
            className="text-center text-lg font-semibold text-blue-500"
          >
            또는 링크로 이동하기
          </div>
        </div>
        <div className="pb-8 w-full h-2" />
      </div>
    </Provider>
  );
};

export default Result;
