import { useLocation, useNavigate } from "react-router-dom";

export const useStep = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navigateNext = () => {
    const routername = (() => {
      switch (pathname) {
        case "/onboarding":
          return "/step/1";
        case "/step/1":
          return "/step/2";
        case "/step/2":
          return "/step/3";
        case "/step/3":
          return "/step/4";
        case "/step/4":
          return "/analysis";
        case "/analysis":
          return "/result";
        default:
          return "/";
      }
    })();
    navigate(routername);
  };

  const navigatePrev = () => {
    const routername = (() => {
      switch (pathname) {
        case "/step/1":
          return "/onboarding";
        case "/step/2":
          return "/step/1";
        case "/step/3":
          return "/step/2";
        case "/step/4":
          return "/step/3";
        case "/analysis":
          return "/step/4";
        case "/result":
          return "/analysis";
        default:
          return "/";
      }
    })();
    navigate(routername);
  };

  return { navigateNext, navigatePrev };
};
