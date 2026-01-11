import { USER_DATA } from "@/constants/userData";
import CardWithDialog from "@/organisms/card/CardWithDialog";
import { type UserDataType } from "@/types/UserDataType";
import { Flex } from "@chakra-ui/react";

const Users = () => {
  return (
    <Flex
      padding={"48px"}
      flexWrap="wrap"
      gap={4}
      justifyContent={{ smDown: "center" }}
    >
      {USER_DATA.map((x: UserDataType) => (
        <CardWithDialog key={x.id} userData={x} />
      ))}
    </Flex>
  );
};

export default Users;
