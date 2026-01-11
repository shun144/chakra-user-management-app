import SLink from "@/atoms/SLink";
import MobileNav from "@/organisms/nav/MobileNav";
import PcNav from "@/organisms/nav/PcNav";
import { Flex } from "@chakra-ui/react";
import { memo } from "react";

const Header = () => {
  return (
    <Flex
      width="100%"
      as="header"
      background="teal"
      paddingX={6}
      paddingY={2}
      gap={12}
      justifyContent={{ base: "space-between", sm: "start" }}
      alignItems="center"
    >
      <SLink
        to="/home"
        color="white"
        userSelect="none"
        fontSize={18}
        focusRing="none"
      >
        ユーザー管理アプリ
      </SLink>

      <MobileNav />
      <PcNav gap={8} />
    </Flex>
  );
};

export default memo(Header);
