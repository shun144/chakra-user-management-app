import React, { type FC } from "react";
import { Card as ChakraCard, Image } from "@chakra-ui/react";
import { Button, Dialog, Field, Input, Portal, Stack } from "@chakra-ui/react";
import type { UserDataType } from "@/types/UserDataType";
import InputField from "@/organisms/form/InputField";

interface Props {
  userData: UserDataType;
}

const CardWithDialog: FC<Props> = ({ userData }) => {
  const { username, name, email, phone } = userData;

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ChakraCard.Root
          width="240px"
          height="240px"
          variant={"elevated"}
          _hover={{ opacity: "0.7" }}
          cursor="pointer"
          as="button"
        >
          <ChakraCard.Body
            gap="2"
            marginX="auto"
            textAlign="center"
            padding="12px"
          >
            <Image
              src="https://picsum.photos/150/150"
              boxSize="140px"
              borderRadius="full"
              fit="cover"
            />
            <ChakraCard.Title>{username}</ChakraCard.Title>
            <ChakraCard.Description>{name}</ChakraCard.Description>
          </ChakraCard.Body>
        </ChakraCard.Root>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>ユーザー詳細</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body pb="4">
              <Stack gap="4">
                <InputField
                  defaultValue={username}
                  label="名前"
                  placeholder="First Name"
                />
                <InputField
                  defaultValue={name}
                  label="フルネーム"
                  placeholder="Full Name"
                />
                <InputField
                  defaultValue={email}
                  label="メール"
                  placeholder="mail"
                />
                <InputField
                  defaultValue={phone}
                  label="TEL"
                  placeholder="TEL"
                />
              </Stack>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default CardWithDialog;
