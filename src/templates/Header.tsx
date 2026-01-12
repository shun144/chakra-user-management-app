import MenuIconButton from "@/atoms/button/MenuIconButton";
import MenuDrawer from "@/molecules/MenuDrawer";
import {
  Link as ChakraLink,
  Flex,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router";

const Header = () => {
  const { onOpen, open, onToggle } = useDisclosure();
  const navigate = useNavigate();
  const onMove = useCallback((path: string) => navigate(path), []);

  return (
    <Flex
      width="100%"
      as="nav"
      bg="teal.500"
      color="gray.50"
      justifyContent={{ base: "space-between", md: "start" }}
      padding={{ base: 3, md: 5 }}
      align="center"
    >
      <Flex
        align="center"
        as="a"
        mr={8}
        _hover={{ cursor: "pointer" }}
        onClick={() => onMove("/home")}
      >
        <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
          ユーザー管理アプリ
        </Heading>
      </Flex>

      <Flex
        align="center"
        fontSize="sm"
        flexGrow="2"
        gapX={4}
        display={{ base: "none", md: "flex" }}
      >
        <ChakraLink color="gray.100" onClick={() => onMove("/home/users")}>
          ユーザー一覧
        </ChakraLink>
        <ChakraLink color="gray.100" onClick={() => onMove("/home/setting")}>
          設定
        </ChakraLink>
      </Flex>

      <MenuIconButton {...{ onOpen }} />
      <MenuDrawer {...{ open, onToggle, onMove }} />
    </Flex>
  );
};

export default memo(Header);
