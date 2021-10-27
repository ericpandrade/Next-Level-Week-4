/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect } from "react";
import { getSystemErrorMap } from "util";
import { ChallengesContext } from "../contexts/ChallengesContexts";
import { useLoginAuthenticationContext } from "../contexts/LoginAuthenticationContext";
import Login from "../pages/login";
import api from "../services/api";

import styles from "../styles/components/Profile.module.scss";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  const { setLoginState } = useLoginAuthenticationContext();

  const { profile, gitHubUser, setGitHubUser, setProfile } =
    useLoginAuthenticationContext();

  useEffect(() => {
    async function GetDataApi() {
      try {
        const { data } = await api.get(profile);

        setGitHubUser(data);
      } catch {
        setLoginState(false);
        setProfile("");
      }
    }

    GetDataApi();
  }, []);

  return (
    <div className={styles.profileContainer}>
      <img src={gitHubUser.avatar_url || "Login.svg"} alt="Eric Andrade" />
      <div>
        <strong>{gitHubUser.name || "Essa pessoa não possui um nome."}</strong>

        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
