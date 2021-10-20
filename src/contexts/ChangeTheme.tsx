import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ChangeThemeProps {
  state: boolean;
  changeTheme: () => void;
}

interface Props {
  children: ReactNode;
}

const ChangeThemeContext = createContext({} as ChangeThemeProps);

const ChangeThemeProvider = ({ children }: Props) => {
  const [state, setState] = useState(false);

  function changeTheme() {
    const isDark = !state;

    document.documentElement.className = isDark ? "darkTheme" : "";

    setState(!state);

    localStorage.setItem("@ChangeTheme/Theme", isDark ? "darkTheme" : "");
  }

  useEffect(() => {
    if (window) {
      const storageMode =
        window.localStorage.getItem("@ChangeTheme/Theme") === "darkTheme";

      if (storageMode) {
        setState(
          window.localStorage.getItem("@ChangeTheme/Theme") === "darkTheme"
        );
        document.documentElement.className = storageMode ? "darkTheme" : "";
      }
    }
  }, []);
  return (
    <ChangeThemeContext.Provider value={{ changeTheme, state }}>
      {children}
    </ChangeThemeContext.Provider>
  );
};

function useAuthContext() {
  const context = useContext(ChangeThemeContext);

  return context;
}

export { useAuthContext, ChangeThemeProvider };
