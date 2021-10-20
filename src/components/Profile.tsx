/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContexts";
import { useAuthContext } from "../contexts/ChangeTheme";

import styles from "../styles/components/Profile.module.scss";

export function Profile() {
  const { changeTheme, state } = useAuthContext();

  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/ericpandrade.png" alt="Eric Andrade" />
      <div>
        <strong>Eric Pereira Andrade</strong>

        <button onClick={changeTheme}>
          {!state ? (
            <img src="icons/moon-dark.svg" alt="Mudar Tema" />
          ) : (
            <img src="icons/moon-light.svg" alt="Mudar Tema" />
          )}
        </button>

        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
