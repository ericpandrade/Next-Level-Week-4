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

import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { useLoginAuthenticationContext } from "../contexts/LoginAuthenticationContext";

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

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    !loading ? setLoading(true) : !loginState && history.push("/login");
  }, [loginState, loading]);

  return !loading ? (
    <div className={styles.HomeContainer}>
      <div className={styles.LoadingContainer}>
        <img src="Login.svg" alt="Loading" />
        <h1>Loading...</h1>
      </div>
    </div>
  ) : (
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
