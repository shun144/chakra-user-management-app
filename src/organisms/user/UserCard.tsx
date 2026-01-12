import { type User } from "@/types/api/user";
import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { type FC } from "react";

type Props = {
  userInfo: Pick<User, "id" | "username" | "name">;
  imageSrc: string;
};

const UserCard: FC<Props> = ({ userInfo, imageSrc }) => {
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      rounded="md"
      shadow={"md"}
      p="4"
      _hover={{ cursor: "pointer", opacity: "0.8" }}
    >
      <Stack textAlign="center">
        <Image
          boxSize={"160px"}
          src={imageSrc}
          rounded={"full"}
          alt={userInfo.username}
          m="auto"
          loading="lazy"
        />
        <Text fontSize={"lg"} fontWeight={"bold"}>
          {userInfo.username}
        </Text>
        <Text fontSize={"sm"} color={"gray"}>
          {userInfo.name}
        </Text>
      </Stack>
    </Box>
  );
};

export default UserCard;
