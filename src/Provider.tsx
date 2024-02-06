import React from "react";
import styled, { css } from "styled-components";
import Aside from "./pages/Aside";

const Provider = ({ children }: React.PropsWithChildren) => {
  const width = window.innerWidth;
  const isDesktop = width >= 900;
  const isMobile = width >= 500;

  return (
    <div className="w-full h-full min-h-[100vh] flex items-center justify-center gap-48">
      {isDesktop && <Aside />}
      <Layout>
        {isMobile && <Mockup src="/assets/IPhone14.png" alt="iphone" />}
        <Screen className="scroll">
          <ScreenContainer isNeedToggle={isMobile}>{children}</ScreenContainer>
        </Screen>
      </Layout>
    </div>
  );
};

const Layout = styled.main`
  margin: 0;
  padding: 0;
  position: relative;
  height: 883px;
  width: 437px;
`;

const Mockup = styled.img`
  height: 883px;
  width: 437px;
  overflow: scroll;
  position: absolute;
  z-index: 1;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Screen = styled.div`
  height: 844px;
  width: 390px;
  position: absolute;
  z-index: 2;
  top: 19.5px;
  border-radius: 49px;
  overflow: scroll;
  left: 23.5px;
`;

const ScreenContainer = styled.div<{ isNeedToggle: boolean }>`
  width: 100%;
  height: 100%;
  background-color: white;
  position: relative;
  ${({ isNeedToggle }) =>
    isNeedToggle &&
    css`
      border-radius: 49px;
      padding: 47px 0 0;
      background-image: url("/assets/IPhone14_Inner.png");
    `}
`;

export default Provider;
