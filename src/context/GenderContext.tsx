"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Allowed gender values
type GenderType = "men" | "women";

// The shape of our context
interface GenderContextProps {
  gender: GenderType;
  setGender: (gender: GenderType) => void;
}

// Create context
const GenderContext = createContext<GenderContextProps | undefined>(undefined);

// Custom hook to use context
export const useGender = () => {
  const context = useContext(GenderContext);
  if (!context) throw new Error("useGender must be used within GenderProvider");
  return context;
};

// Provider component to wrap your app
export const GenderProvider = ({ children }: { children: ReactNode }) => {
  const [gender, setGender] = useState<GenderType>("men"); // default = men

  return (
    <GenderContext.Provider value={{ gender, setGender }}>
      {children}
    </GenderContext.Provider>
  );
};
