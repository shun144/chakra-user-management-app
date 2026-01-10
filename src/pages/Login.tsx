import React, { useRef } from "react";
import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import { USER_DATA_IDS } from "@/constants/userData";
import { parseNumber } from "@/utils/commonUtil";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const userIdRef = useRef<HTMLInputElement>(null);
  const onClickLogin = () => {
    if (!userIdRef.current?.value) return;

    const enteredUserId = parseNumber(userIdRef.current.value);

    if (!USER_DATA_IDS.has(enteredUserId)) {
      toaster.create({
        description: "存在しないユーザーIDです",
        type: "error",
        closable: true,
      });
      return;
    }
    navigate("/home");
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex
        direction="column"
        background="gray.100"
        padding={12}
        rounded={6}
        width={400}
      >
        <Heading userSelect="none" mb={3} marginX="auto">
          ユーザー管理アプリ
        </Heading>
        <Input
          ref={userIdRef}
          placeholder="ユーザーID"
          variant="outline"
          mb={6}
          type="text"
        />
        <Button
          onClick={onClickLogin}
          mb={6}
          backgroundColor={"teal"}
          _hover={{ opacity: 0.8 }}
        >
          ログイン
        </Button>
      </Flex>
    </Flex>
  );
};

export default Login;
