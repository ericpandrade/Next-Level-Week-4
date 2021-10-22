import { useAuthContext } from "../contexts/ChangeTheme";

import styles from "../styles/components/LateralMenu.module.scss";

const LateralMenu = () => {
  const { changeTheme, state } = useAuthContext();

  return (
    <div className={styles.LateralMenu}>
      <img src="/icons/logo-home.svg" alt="Logo icon home" />

      <button onClick={changeTheme}>
        {!state ? (
          <img src="icons/moon-dark.svg" alt="Mudar Tema" />
        ) : (
          <img src="icons/moon-light.svg" alt="Mudar Tema" />
        )}
      </button>
    </div>
  );
};

export default LateralMenu;
