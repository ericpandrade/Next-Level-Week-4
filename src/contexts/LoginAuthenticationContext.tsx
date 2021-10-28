import { createContext, ReactNode, useContext, useState } from "react";

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
  block: boolean;
  setBlock: (block) => void;
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

  const [block, setBlock] = usePersistedState(
    "LoginAuthenticationContext/block",
    false
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
        block,
        setBlock,
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
