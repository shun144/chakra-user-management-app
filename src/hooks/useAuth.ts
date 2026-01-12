import useMessage from "@/hooks/useMessage";
import { useActionLoginUserContext } from "@/provider/auth/useLoginContext";
import type { User } from "@/types/api/user";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router";

const useAuth = () => {
  const { setLoginUser } = useActionLoginUserContext();
  const navigate = useNavigate();

  const { showSuccessMessage, showErrorMessage } = useMessage();

  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(async (enteredUserId: number) => {
    try {
      setIsLoading(true);

      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${enteredUserId}`
      );

      if (!res.ok) throw new Error("存在しないユーザIDです");

      const loggedinUser = (await res.json()) as User;
      const isAdmin = loggedinUser.id === 1;
      setLoginUser({ ...loggedinUser, isAdmin });
      showSuccessMessage("ログインしました");
      navigate("/home/users");
    } catch (err) {
      if (err instanceof Error) {
        showErrorMessage(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { login, isLoading };
};

export default useAuth;
