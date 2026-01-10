import React, { type FC } from "react";
import { Card as ChakraCard, Image } from "@chakra-ui/react";

interface Props {
  userName: string;
  name: string;
}

const Card: FC<Props> = ({ userName, name }) => {
  return (
    <ChakraCard.Root width="240px" height="240px" variant={"elevated"}>
      <ChakraCard.Body gap="2" marginX="auto" textAlign="center" padding="12px">
        <Image
          src="https://picsum.photos/150/150"
          boxSize="140px"
          borderRadius="full"
          fit="cover"
        />
        <ChakraCard.Title>{userName}</ChakraCard.Title>
        <ChakraCard.Description>{name}</ChakraCard.Description>
      </ChakraCard.Body>
    </ChakraCard.Root>
  );
};

export default Card;
