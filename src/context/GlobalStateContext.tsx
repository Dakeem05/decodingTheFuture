"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

interface GlobalStateContextType {
  isNotVerified: boolean;
  setIsNotVerified: Dispatch<SetStateAction<boolean>>;
  isRegistered: boolean;
  setIsRegistered: Dispatch<SetStateAction<boolean>>;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  isLoading: boolean;
}

const GlobalStateContext = createContext<GlobalStateContextType | undefined>(
  undefined
);

export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isNotVerified, setIsNotVerified] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [count, setCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://backend.decodingthefuture.xyz/api/v1/event-registration/count"
        );

        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();

        setCount(data.data.count);
        setIsLoading(false);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [isRegistered]);

  return (
    <GlobalStateContext.Provider
      value={{
        isNotVerified,
        setIsNotVerified,
        isRegistered,
        setIsRegistered,
        count,
        setCount,
        isLoading
      }}
    >
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
