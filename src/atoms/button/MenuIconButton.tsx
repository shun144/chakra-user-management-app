import { IconButton, type UseDisclosureReturn } from "@chakra-ui/react";
import { memo, type FC } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

type Props = Pick<UseDisclosureReturn, "onOpen">;

const MenuIconButton: FC<Props> = ({ onOpen }) => {
  return (
    <IconButton
      aria-label="メニューボタン"
      size="sm"
      variant="ghost"
      onClick={onOpen}
      display={{ base: "block", md: "none" }}
    >
      <RxHamburgerMenu />
    </IconButton>
  );
};

export default memo(MenuIconButton);
