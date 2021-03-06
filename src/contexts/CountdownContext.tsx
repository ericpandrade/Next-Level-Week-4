import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { ChallengesContext } from "./ChallengesContexts";

interface CountDownContextData {
  minutes: number;
  seconds: number;
  isActive: boolean;
  hasFinished: boolean;
  startCountDown: () => void;
  resetCountDown: () => void;
}

interface CountDownProviderProps {
  children: ReactNode;
}

export const CountDownContext = createContext({} as CountDownContextData);

let countDownTimeout: NodeJS.Timeout;

export function CountDownProvider({ children }: CountDownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(25 * 60);
  const [isActive, setisActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  useEffect(() => {
    window.onbeforeunload = () => {
      if (isActive) {
        return "Você perderá o progresso do countdown até aqui, tem certeza?";
      }
    };
  }, [isActive]);

  function startCountDown() {
    setisActive(true);
  }

  function resetCountDown() {
    clearTimeout(countDownTimeout);
    setisActive(false);
    setTime(25 * 60);
    setHasFinished(false);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setisActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return (
    <CountDownContext.Provider
      value={{
        minutes,
        seconds,
        isActive,
        hasFinished,
        startCountDown,
        resetCountDown,
      }}
    >
      {children}
    </CountDownContext.Provider>
  );
}
