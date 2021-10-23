import { useEffect, useState } from "react";

function usePersistedState(key: string, initialState: any) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const storageValue = sessionStorage.getItem(key);

    storageValue ? setState(JSON.parse(storageValue)) : setState(initialState);
  }, []);

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
