import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          "500": { value: "tomato" },
        },
      },
    },
  },
  globalCss: {
    html: {
      bg: "gray.100",
      color: "gray.800",
    },
  },
});

export const system = createSystem(defaultConfig, config);
