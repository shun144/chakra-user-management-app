import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("AuthProvider配下で呼び出してください");
  }

  return context;
};
