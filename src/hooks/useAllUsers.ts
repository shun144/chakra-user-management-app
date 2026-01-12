import useMessage from "@/hooks/useMessage";
import { type User } from "@/types/api/user";
import { useCallback, useState } from "react";

const useAllUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const { showErrorMessage } = useMessage();

  const fetchAllUsers = useCallback(() => {
    (async () => {
      setIsLoading(true);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) throw new Error("ユーザー一覧の取得に失敗しました");
        const fetchdUsers = (await res.json()) as User[];
        setUsers(fetchdUsers);
      } catch (err) {
        if (err instanceof Error) {
          showErrorMessage(err.message);
        } else {
          showErrorMessage("500エラー:データ取得に失敗しました");
        }
        setUsers([]);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { fetchAllUsers, isLoading, users };
};

export default useAllUsers;
