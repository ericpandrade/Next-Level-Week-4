/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/pages/Login.module.scss";

import Link from "next/link";

const Login = () => {
  return (
    <div className={styles.LoginContainer}>
      <Head>
        <title>Login | Move.it</title>
      </Head>
      <img src="Login.svg" alt="LOgo Full Login" className={styles.LogoFull} />

      <div className={styles.AuthContainer}>
        <img src="logo-full.svg" alt="Logo Login" />
        <h1>Bem-vindo</h1>
        <div>
          <img
            src="/icons/github.svg"
            alt="Icone Github"
            className={styles.LogoAuth}
          />

          <p>
            Faça login com o GitHub <br /> para conectar.
          </p>
        </div>
        <Link href="/">
          <a>
            <button>
              <span>Logar com o GitHub</span>
              <img src="icons/arrow-login.svg" alt="Login" />
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Login;
