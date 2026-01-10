import React from "react";
import { USER_DATA } from "@/constants/userData";
import { type UserDataType } from "@/types/UserDataType";
import { Avatar, Button, Flex, Image } from "@chakra-ui/react";
import Card from "@/organisms/Card";

const Users = () => {
  return (
    <Flex
      padding={"24px"}
      flexWrap="wrap"
      background={"red"}
      // justifyContent="start"
      // alignItems="start"
    >
      {USER_DATA.map((x: UserDataType) => (
        <Card key={x.id} userName={x.username} name={x.name} />
      ))}
    </Flex>
  );
};

export default Users;
