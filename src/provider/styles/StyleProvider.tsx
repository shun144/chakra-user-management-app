import { system } from "@/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import type { FC, PropsWithChildren } from "react";

const StyleProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider>{children}</ThemeProvider>
    </ChakraProvider>
  );
};

export default StyleProvider;
