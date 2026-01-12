import useAllUsers from "@/hooks/useAllUsers";
import useSelectUser from "@/hooks/useSelectUser";
import UserCard from "@/organisms/user/UserCard";
import UserDetailModal from "@/organisms/user/UserDetailModal";
import { type User } from "@/types/api/user";
import {
  Center,
  Spinner,
  Text,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useCallback, useEffect } from "react";

const Users = () => {
  const { fetchAllUsers, isLoading, users } = useAllUsers();
  const { selectedUser, onSelectUser } = useSelectUser();
  useEffect(() => fetchAllUsers(), []);
  const { open, onToggle, onOpen } = useDisclosure();

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users });
      onOpen();
    },
    [users]
  );

  if (isLoading) {
    return (
      <Center h="100%">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (users.length === 0) {
    return (
      <Center h="100%">
        <Text fontSize={"2xl"} color={"gray.500"}>
          ユーザーが存在しません
        </Text>
      </Center>
    );
  }

  return (
    <>
      <Wrap
        padding={"48px"}
        gap={4}
        justify={{ base: "center", md: "start" }}
        p={{ base: 4, md: 10 }}
      >
        {users.map((user: User) => (
          <WrapItem key={user.id} onClick={() => onClickUser(user.id)}>
            <UserCard
              userInfo={user}
              imageSrc={`https://picsum.photos/160/160?random=${user.id}`}
            />
          </WrapItem>
        ))}
      </Wrap>

      <UserDetailModal
        open={open}
        onToggle={onToggle}
        selectedUser={selectedUser}
      />
    </>
  );
};

export default Users;
