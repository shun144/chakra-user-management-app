import { useContext } from "react";
import { ActionContext, ValueContext } from "./LoginProvider";

export const useLoginUserContext = () => {
  const context = useContext(ValueContext);
  if (!context) {
    throw new Error("LoginProvider配下で呼び出してください");
  }
  return context;
};

export const useActionLoginUserContext = () => {
  const context = useContext(ActionContext);
  if (!context) {
    throw new Error("LoginProvider配下で呼び出してください");
  }
  return context;
};
