import { ChangeThemeProvider } from "../contexts/ChangeTheme";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ChangeThemeProvider>
      <Component {...pageProps} />
    </ChangeThemeProvider>
  );
}

export default MyApp;
