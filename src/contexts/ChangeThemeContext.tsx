import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ChangeThemeProps {
  themeState: boolean;
  changeTheme: () => void;
}

interface Props {
  children: ReactNode;
}

const ChangeThemeContext = createContext({} as ChangeThemeProps);

const ChangeThemeProvider = ({ children }: Props) => {
  const [themeState, setThemeState] = useState(false);

  function changeTheme() {
    const isDark = !themeState;

    document.documentElement.className = isDark ? "darkTheme" : "";

    setThemeState(!themeState);

    localStorage.setItem("@ChangeTheme/Theme", isDark ? "darkTheme" : "");
  }

  useEffect(() => {
    if (window) {
      const storageMode =
        window.localStorage.getItem("@ChangeTheme/Theme") === "darkTheme";

      if (storageMode) {
        setThemeState(
          window.localStorage.getItem("@ChangeTheme/Theme") === "darkTheme"
        );
        document.documentElement.className = storageMode ? "darkTheme" : "";
      }
    }
  }, []);

  return (
    <ChangeThemeContext.Provider value={{ changeTheme, themeState }}>
      {children}
    </ChangeThemeContext.Provider>
  );
};

function useAuthContext() {
  const context = useContext(ChangeThemeContext);

  return context;
}

export { useAuthContext, ChangeThemeProvider };
