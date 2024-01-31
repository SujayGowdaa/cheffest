/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const Context = createContext();

export default function AppContext({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <Context.Provider value={{ isCartOpen, setIsCartOpen }}>
      {children}
    </Context.Provider>
  );
}

export function useAppContext() {
  const context = useContext(Context);
  if (!context)
    throw new Error("Please use context within the context provider.");
  return context;
}
