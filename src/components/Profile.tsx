/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContexts";

import styles from "../styles/components/Profile.module.scss";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/ericpandrade.png" alt="Eric Andrade" />
      <div>
        <strong>Eric Pereira Andrade</strong>

        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
