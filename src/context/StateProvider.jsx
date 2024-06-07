import React, { createContext, useState } from "react";
export const StateContext = createContext();
const StateProvider = ({ children }) => {
  const color = ["Blue", "Dark", "Light", "Yellow", "Red", "Green"];
  const [theme, setTheme] = useState("blue");
  return (
    <StateContext.Provider value={{ color, theme, setTheme }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
