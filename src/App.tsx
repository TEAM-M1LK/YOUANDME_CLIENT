import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OnBoarding from "./pages/OnBoarding";
import BusinessCard from "./pages/BusinessCard";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import { Provider as Jotai } from "jotai";
import Step4 from "./pages/Step4";
import Analysis from "./pages/Analysis";
import Result from "./pages/Result";

const App = () => {
  return (
    <Jotai>
      <BrowserRouter>
        <Routes>
          <Route path="/onboarding" element={<OnBoarding />} />
          <Route path="/step/1" element={<Step1 />} />
          <Route path="/step/2" element={<Step2 />} />
          <Route path="/step/3" element={<Step3 />} />
          <Route path="/step/4" element={<Step4 />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/result" element={<Result />} />
          <Route path="/business/card" element={<BusinessCard />} />
        </Routes>
      </BrowserRouter>
    </Jotai>
  );
};

export default App;
