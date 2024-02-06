import axios from "axios";
import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { context, resultContext } from "../context";
import { useNavigate } from "react-router-dom";
import Logo from "../icons/Logo";
import Provider from "../Provider";

const Analysis = () => {
  const navigate = useNavigate();
  const [info] = useAtom(context);
  const [, setResult] = useAtom(resultContext);

  useEffect(() => {
    (async () => {
      const { data } = await axios.post("/analysis", { data: info });
      setResult(data);
      navigate("/result");
    })();
  }, []);

  return (
    <Provider>
      <div className="w-full h-full flex flex-col p-10 gap-10">
        <span className="text-2xl font-bold">
          대화를 분석하고있어...
          <br />
          조금만 기다려줘!
        </span>
        <main className="flex flex-col gap-4 w-full h-full items-center justify-center">
          <Logo className="w-48" />
        </main>
      </div>
    </Provider>
  );
};

export default Analysis;
