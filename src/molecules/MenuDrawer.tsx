import {
  Button,
  Drawer,
  DrawerActionTrigger,
  Portal,
  Stack,
  type UseDisclosureReturn,
} from "@chakra-ui/react";
import type { FC } from "react";

type Props = Pick<UseDisclosureReturn, "open" | "onToggle"> & {
  onMove: (path: string) => void;
};

const MenuDrawer: FC<Props> = ({ open, onToggle, onMove }) => {
  return (
    <Drawer.Root open={open} onOpenChange={onToggle} placement={"start"}>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content w="150px">
            <Drawer.Body bg="gray.100" shadow="sm">
              <Stack>
                <DrawerActionTrigger asChild>
                  <Button variant="ghost" onClick={() => onMove("/home")}>
                    TOP
                  </Button>
                </DrawerActionTrigger>

                <DrawerActionTrigger asChild>
                  <Button variant="ghost" onClick={() => onMove("/home/users")}>
                    ユーザ一一覧
                  </Button>
                </DrawerActionTrigger>

                <DrawerActionTrigger asChild>
                  <Button
                    variant="ghost"
                    onClick={() => onMove("/home/setting")}
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

export default MenuDrawer;
