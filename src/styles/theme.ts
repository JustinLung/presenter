import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    useSystemColorMode: false,
  },
  colors: {
    purple: "#54287F",
    darkgrey: "#161616",
    black: "#0E0E0E",
    white: "#ffffff",
  },
  styles: {
    global: () => ({
      body: {
        bg: "#0E0E0E",
        color: "#ffffff",
      },
    }),
  },
});
