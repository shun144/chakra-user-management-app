import SLink from "@/atoms/SLink";
import { Box, Flex, type FlexProps } from "@chakra-ui/react";
import { type FC } from "react";

const PcNav: FC<FlexProps> = ({ ...props }) => {
  return (
    <Box hideBelow="sm">
      <Flex {...props}>
        <SLink
          to="/users"
          color="white"
          userSelect="none"
          fontWeight="300"
          focusRing="none"
        >
          ユーザ一覧
        </SLink>
        <SLink
          to="/setting"
          color="white"
          userSelect="none"
          fontWeight="300"
          focusRing="none"
        >
          設定
        </SLink>
      </Flex>
    </Box>
  );
};

export default PcNav;
