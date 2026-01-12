import { Link as ChakraLink } from "@chakra-ui/react";
import { type ComponentProps, type FC } from "react";
import { Link as RouterLink } from "react-router";

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
