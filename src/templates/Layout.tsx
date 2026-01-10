import React from "react";
import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import { Outlet } from "react-router";
import SLink from "@/atoms/SLink";

const Layout = () => {
  return (
    <Flex width="100vw" height="100vh" direction="column">
      <div style={{ flex: 1 }}>aaa</div>
      {/* <Flex
        width="100%"
        as="header"
        background="teal"
        paddingX={6}
        paddingY={2}
        gap={12}
        justifyContent="start"
        alignItems="center"
      >
        <div>
          <SLink to="/home" color="white" userSelect="none" fontSize={18}>
            ユーザー管理アプリ
          </SLink>
        </div>

        <Flex gap={6}>
          <SLink to="/users" color="white" userSelect="none" fontWeight="300">
            ユーザ一覧
          </SLink>
          <SLink to="/setting" color="white" userSelect="none" fontWeight="300">
            設定
          </SLink>
        </Flex>
      </Flex> */}
      <div style={{ flexGrow: "1" }}>
        <Outlet />
      </div>
    </Flex>
  );
};

export default Layout;
