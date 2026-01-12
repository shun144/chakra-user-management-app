import PrimaryButton from "@/atoms/button/PrimaryButton";
import { useLoginUserContext } from "@/provider/auth/useLoginContext";
import { type User } from "@/types/api/user";
import {
  Dialog,
  IconButton,
  Portal,
  Stack,
  type UseDisclosureReturn,
} from "@chakra-ui/react";
import { memo, useRef, type FC } from "react";
import { RxCross2 } from "react-icons/rx";
import InputField from "../form/InputField";

type Props = Partial<UseDisclosureReturn> & {
  selectedUser: User | null;
};

const UserModal: FC<Props> = ({ open, onToggle, selectedUser }) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const { loginUser } = useLoginUserContext();

  return (
    <Dialog.Root
      open={open}
      onOpenChange={onToggle}
      initialFocusEl={() => ref.current}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title m="auto">ユーザー詳細</Dialog.Title>
              <Dialog.ActionTrigger asChild>
                <IconButton variant={"ghost"}>
                  <RxCross2 />
                </IconButton>
              </Dialog.ActionTrigger>
            </Dialog.Header>
            <Dialog.Body pb="4">
              <Stack gap="4">
                <InputField
                  defaultValue={selectedUser?.username}
                  label="名前"
                  placeholder="First Name"
                />
                <InputField
                  defaultValue={selectedUser?.name}
                  label="フルネーム"
                  placeholder="Full Name"
                />
                <InputField
                  defaultValue={selectedUser?.email}
                  label="メール"
                  placeholder="mail"
                />
                <InputField
                  defaultValue={selectedUser?.phone}
                  label="TEL"
                  placeholder="TEL"
                />
              </Stack>
            </Dialog.Body>

            {loginUser.isAdmin && (
              <Dialog.Footer>
                <PrimaryButton>更新</PrimaryButton>
              </Dialog.Footer>
            )}
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default memo(UserModal);
