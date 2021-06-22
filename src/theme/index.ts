import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import Heading from "./components/heading";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false
};

const theme = extendTheme({
  ...config,
  fonts: {
    body:
      "Inter var,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
  },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth"
      },
      body: {
        color: "gray.600"
      }
    }
  },

  components: {
    Heading
  },
  layerStyles: {
    base: {
      bg: "white",
      border: "1px",
      rounded: "lg",
      boxShadow: "2xl",
      borderColor: "gray.200",
      ".chakra-ui-dark &": {
        bg: "gray.800",
        borderColor: "gray.700"
      }
    }
  }
});
export default theme;
