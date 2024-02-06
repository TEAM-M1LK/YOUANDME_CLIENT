import React from "react";

interface BarGraphProps {
  me: string;
  you: string;
  percent: number;
}

const BarGraph = ({ me, you, percent }: BarGraphProps) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="font-semibold flex items-center gap-1">
        <span>{me}</span>
        <span className="text-[#aaa] text-sm">{percent}%</span>
      </div>
      <div className="w-full h-8 bg-[#A259FF]">
        <div
          className={"h-8 bg-[#FF61BF] border-r-4 border-solid border-white"}
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className="font-semibold flex items-center ml-auto gap-2">
        <span className="text-[#aaa] text-sm">{100 - percent}%</span>
        <span>{you}</span>
      </div>
    </div>
  );
};

export default BarGraph;
