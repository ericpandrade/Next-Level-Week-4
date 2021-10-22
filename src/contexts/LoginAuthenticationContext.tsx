import { createContext, ReactNode, useContext, useState } from "react";

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
  const [loginState, setLoginState] = useState(false);

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
