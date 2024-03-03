import { createContext, useContext } from "react";
import Detail from "../api/detail";

export const DetailVideoContext = createContext();

const detail = new Detail();

export function DetailVideoProvider({ children }) {
  return (
    <DetailVideoContext.Provider value={{ detail }}>
      {children}
    </DetailVideoContext.Provider>
  );
}

export function useDetailVideo() {
  return useContext(DetailVideoContext);
}
