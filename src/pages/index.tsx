/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { GetServerSideProps } from "next";

import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/Countdown";
import { ExperienceBar } from "../components/experienceBar";
import { Profile } from "../components/Profile";

import styles from "../styles/pages/Home.module.scss";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountDownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContexts";
import LateralMenu from "../components/SideBar";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { useLoginAuthenticationContext } from "../contexts/LoginAuthenticationContext";
import { useHistory } from "react-router";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home({
  level,
  currentExperience,
  challengesCompleted,
}: HomeProps) {
  const { loginState } = useLoginAuthenticationContext();

  const history = useRouter();

  useEffect(() => {
    !loginState ? history.push("/login") : history.push("/");
  }, [loginState]);

  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <div className={styles.HomeContainer}>
        <div className={styles.LateralMenu}>
          <LateralMenu />
        </div>

        <div className={styles.container}>
          <Head>
            <title>Home | Move.it</title>
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
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Surge tudo para o servidor node do next

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
