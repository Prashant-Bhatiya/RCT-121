import React, { useState } from "react";

export const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const [state, setState] = useState("Light");

  const setTheme = () => {
    state === "Light" ? setState("Dark") : setState("Light");
  };
  return (
    <AppContext.Provider value={[state, setTheme]}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
