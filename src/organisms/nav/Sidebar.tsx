import {
  Button,
  Drawer,
  DrawerActionTrigger,
  IconButton,
  Portal,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router";

const Sidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <Drawer.Root
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      placement={"start"}
    >
      <Drawer.Trigger asChild>
        <IconButton
          aria-label="sidebar open icon"
          variant="ghost"
          _expanded={{ background: "none" }}
        >
          <RxHamburgerMenu color="white" />
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content w="150px">
            <Drawer.Body>
              <Stack>
                <DrawerActionTrigger asChild>
                  <Button variant="ghost" onClick={() => handleClick("/home")}>
                    TOP
                  </Button>
                </DrawerActionTrigger>

                <DrawerActionTrigger asChild>
                  <Button variant="ghost" onClick={() => handleClick("/users")}>
                    ユーザ一一覧
                  </Button>
                </DrawerActionTrigger>
                <DrawerActionTrigger asChild>
                  <Button
                    variant="ghost"
                    onClick={() => handleClick("/setting")}
                  >
                    設定
                  </Button>
                </DrawerActionTrigger>
              </Stack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default Sidebar;
