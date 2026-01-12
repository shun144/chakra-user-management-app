import PrimaryButton from "@/atoms/button/PrimaryButton";
import useAuth from "@/hooks/useAuth";
import { parseNumber } from "@/utils/commonUtil";
import {
  Box,
  Flex,
  Heading,
  Input,
  Separator,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
  const [text, setText] = useState("");
  const { login, isLoading } = useAuth();

  const onClickLogin = () => {
    if (text.length === 0) return;
    const enteredUserId = parseNumber(text);
    login(enteredUserId);
  };

  const onKeyEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    onClickLogin();
  };

  return (
    <Flex height="100vh" align="center" justify="center">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow={"md"}>
        <Heading as="h1" size={"lg"} userSelect="none" textAlign={"center"}>
          ユーザー管理アプリ
        </Heading>
        <Separator my={4} />
        <Stack spaceY={6} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            variant="outline"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={onKeyEnter}
          />
          <PrimaryButton
            onClick={onClickLogin}
            isLoading={isLoading}
            isEmpty={text.length === 0}
          >
            {isLoading ? <Spinner /> : "ログイン"}
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Login;
