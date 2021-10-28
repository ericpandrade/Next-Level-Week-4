/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/pages/Login.module.scss";

import Link from "next/link";
import { useLoginAuthenticationContext } from "../contexts/LoginAuthenticationContext";

const Login = () => {
  const { routeAuthentication, setProfile, block } =
    useLoginAuthenticationContext();

  return (
    <div className={styles.LoginContainer}>
      <Head>
        <title>Login | Move.it</title>
      </Head>
      <img src="Login.svg" alt="LOgo Full Login" className={styles.LogoFull} />

      <div className={styles.AuthContainer}>
        <img
          src="logo-full.svg"
          alt="Logo Login"
          className={styles.LogoLogin}
        />
        <h1>Bem-vindo</h1>
        <div>
          <img
            src="/icons/github.svg"
            alt="Icone Github"
            className={styles.LogoAuth}
          />

          <p>
            Digite o seu usuário GitHub <br />
            Para conectar
          </p>
        </div>
        <div className={styles.InputContainer}>
          <input
            type="text"
            placeholder="Digite seu nome aqui"
            onChange={(event) => setProfile(event.target.value)}
          />
          <Link href="/">
            <a>
              <button onClick={routeAuthentication}>
                <img src="icons/arrow-login.svg" alt="Login" />
              </button>
            </a>
          </Link>
        </div>

        {!block ? (
          ""
        ) : (
          <div className={styles.ErrorContainer}>
            <img src="erro.svg" alt="Site com erro 404" />
            <p className={styles.ErrorMessage}>Usuário não encontrado!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
