import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router";
import Header from "./Header";

const Layout = () => {
  return (
    <Flex width="100vw" height="100vh" direction="column">
      <Header />
      <div style={{ flexGrow: "1" }}>
        <Outlet />
      </div>
    </Flex>
  );
};

export default Layout;
