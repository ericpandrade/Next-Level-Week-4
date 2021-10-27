import { createContext, ReactNode, useContext } from "react";

import usePersistedState from "../Utils/UsePersistedState";

interface GitHubUserData {
  name: string;
  avatar_url: string;
}

interface loginAuthenticationContextData {
  loginState: boolean;
  setLoginState: (loginState) => void;
  routeAuthentication: () => void;
  profile: string;
  setProfile: (profile) => void;
  gitHubUser: GitHubUserData;
  setGitHubUser: (gitHubUser) => void;
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

  const [profile, setProfile] = usePersistedState(
    "@LoginAuthenticationContext/profile",
    ""
  );

  const [gitHubUser, setGitHubUser] = usePersistedState(
    "LoginAuthenticationContext/GitHub",
    {} as GitHubUserData
  );

  function routeAuthentication() {
    setLoginState(!loginState);
  }

  return (
    <LoginAuthenticationContext.Provider
      value={{
        loginState,
        routeAuthentication,
        profile,
        setProfile,
        gitHubUser,
        setGitHubUser,
        setLoginState,
      }}
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
