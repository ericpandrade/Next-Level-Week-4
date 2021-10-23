import { createContext, ReactNode, useContext } from "react";

import usePersistedState from "../Utils/UsePersistedState";

interface loginAuthenticationContextData {
  loginState: boolean;
  routeAuthentication: () => void;
}

interface LoginAuthenticationProps {
  children: ReactNode;
}

const LoginAuthenticationContext = createContext(
  {} as loginAuthenticationContextData
);

const LoginAuthenticationProvider = ({
  children,
}: LoginAuthenticationProps) => {
  const [loginState, setLoginState] = usePersistedState(
    "@LoginAuthenticationContext/loginState",
    false
  );

  function routeAuthentication() {
    setLoginState(!loginState);
  }

  return (
    <LoginAuthenticationContext.Provider
      value={{ loginState, routeAuthentication }}
    >
      {children}
    </LoginAuthenticationContext.Provider>
  );
};

function useLoginAuthenticationContext() {
  const context = useContext(LoginAuthenticationContext);

  return context;
}

export { LoginAuthenticationProvider, useLoginAuthenticationContext };
