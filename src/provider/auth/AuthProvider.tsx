import React, {
  createContext,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";

interface ContextType {
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValue = {
  isAdmin: false,
  setIsAdmin: () => {},
};

export const AuthContext = createContext<ContextType>(defaultValue);

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <AuthContext
      value={{
        isAdmin,
        setIsAdmin,
      }}
    >
      {children}
    </AuthContext>
  );
};

export default AuthProvider;
