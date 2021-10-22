/* eslint-disable @next/next/no-img-element */
import { useAuthContext } from "../contexts/ChangeThemeContext";
import { useLoginAuthenticationContext } from "../contexts/LoginAuthenticationContext";

import styles from "../styles/components/SideBar.module.scss";

const LateralMenu = () => {
  const { changeTheme, themeState } = useAuthContext();

  const { routeAuthentication } = useLoginAuthenticationContext();

  return (
    <div className={styles.LateralMenu}>
      <img src="/icons/logo-home.svg" alt="Logo icon home" />

      <button onClick={routeAuthentication} className={styles.LogoutMenu}>
        {!themeState ? (
          <img src="icons/logout-dark.png" alt="Logout Dark Theme" />
        ) : (
          <img src="icons/logout-light.png" alt="Logout Light Theme" />
        )}
      </button>

      <button onClick={changeTheme}>
        {!themeState ? (
          <img src="icons/moon-dark.svg" alt="Mudar Tema" />
        ) : (
          <img src="icons/moon-light.svg" alt="Mudar Tema" />
        )}
      </button>
    </div>
  );
};

export default LateralMenu;
