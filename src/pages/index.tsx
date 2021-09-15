import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/Countdown";
import { ExperienceBar } from "../components/experienceBar";
import { Profile } from "../components/Profile";

import Head from "next/head";

import styles from "../styles/pages/Home.module.scss";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountDownProvider } from "../contexts/CountdownContext";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />

      <CountDownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <CountDown />
          </div>

          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountDownProvider>
    </div>
  );
}
