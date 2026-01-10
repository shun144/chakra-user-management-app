import React, { type ComponentProps, type FC } from "react";
import { Link as RouterLink } from "react-router";
import { Link as ChakraLink } from "@chakra-ui/react";

type Props = ComponentProps<typeof RouterLink> &
  ComponentProps<typeof ChakraLink>;

const SLink: FC<Props> = ({ children, ...props }) => {
  return (
    <ChakraLink as={RouterLink} {...props}>
      {children}
    </ChakraLink>
  );
};

export default SLink;
