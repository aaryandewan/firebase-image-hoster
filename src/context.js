import React, { useState, useEffect, useContext } from "react";

const TempContext = React.createContext();

export const TempContextProvider = ({ children }) => {
  let [counter, setCounter] = useState(0);

  return (
    <TempContext.Provider value={{ counter, setCounter }}>
      {children}
    </TempContext.Provider>
  );
};

export const TempCustomHook = () => {
  return useContext(TempContext);
};
