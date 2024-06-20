"use client";
import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface GlobalStateContextType {
  isNotVerified: boolean;
  setIsNotVerified: Dispatch<SetStateAction<boolean>>;
}

const GlobalStateContext = createContext<GlobalStateContextType | undefined>(
  undefined
);

export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isNotVerified, setIsNotVerified] = useState(false);

  return (
    <GlobalStateContext.Provider value={{ isNotVerified, setIsNotVerified }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = (): GlobalStateContextType => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};