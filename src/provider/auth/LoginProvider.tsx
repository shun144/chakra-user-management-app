import { type User } from "@/types/api/user";
import React, {
  createContext,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";

type LoginUser = User & {
  isAdmin: boolean;
};

interface IValueContext {
  loginUser: LoginUser;
}

interface IActionContext {
  setLoginUser: React.Dispatch<React.SetStateAction<LoginUser>>;
}

export const ValueContext = createContext<IValueContext>({
  loginUser: {} as LoginUser,
});
export const ActionContext = createContext<IActionContext>({
  setLoginUser: () => {},
});

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [loginUser, setLoginUser] = useState<LoginUser>({} as LoginUser);

  return (
    <ValueContext value={{ loginUser }}>
      <ActionContext value={{ setLoginUser }}>{children}</ActionContext>
    </ValueContext>
  );
};

export default AuthProvider;
