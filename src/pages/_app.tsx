import React from "react";
import { ChangeThemeProvider } from "../contexts/ChangeThemeContext";
import { LoginAuthenticationProvider } from "../contexts/LoginAuthenticationContext";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ChangeThemeProvider>
      <LoginAuthenticationProvider>
        <Component {...pageProps} />
      </LoginAuthenticationProvider>
    </ChangeThemeProvider>
  );
}

export default MyApp;
