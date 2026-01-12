import type { User } from "@/types/api/user";
import { useCallback, useState } from "react";

interface Args {
  id: number;
  users: Array<User>;
}

const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback(({ id, users }: Args) => {
    const foundUser = users.find((x) => id === x.id);
    setSelectedUser(foundUser ?? null);
  }, []);

  return { onSelectUser, selectedUser };
};

export default useSelectUser;
