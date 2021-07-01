import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      color: mode("purple.900", "white")(props),
      background: mode("white", "purple.900")(props),
    },
    ".eb": {
      ":first-of-type": {
        fontWeight: "bold",
        fontSize: "lg",
      },
      div: {
        marginBottom: 5,
        marginTop: "0 !important",
        marginLeft: "0 !important",
        marginRight: "0 !important",
      },
      p: {
        marginBottom: 5,
      },
      a: {
        color: "green.500",
      },
      "h1,h2,h3,h4,h5,h6": {
        fontWeight: "bold",
        marginBottom: "3",
        fontSize: "lg",
      }
    },
  }),
};

const components = {
  Heading: {
    baseStyle: {
      fontWeight: "normal",
    },
    variants: {
      uppercase: {
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: "0.18em",
        fontFamily: "body",
      },
    },
  },
  Button: {
    baseStyle: {
      fontWeight: "normal",
    },
  },
  Text: {
    baseStyle: {
      lineHeight: 1.75,
    },
    variants: {
      light: (props) => ({
        color: mode("gray.600", "gray.400")(props),
      }),
    },
  },
  Link: {
    variants: {
      light: (props) => ({
        color: mode("gray.600", "gray.400")(props),
      }),
    },
  },
};

const colors = {
  brand: {},
  purple: {
    50: "#e0f4ff",
    100: "#b8dcfa",
    200: "#8ec4f1",
    300: "#63ace8",
    400: "#3994e0",
    500: "#1f7bc6",
    600: "#135f9b",
    700: "#084470",
    800: "#031c2d",
    900: "#000f1d",
  },
  dark: {
    50: "#e0f4ff",
    100: "#b8dcfa",
    200: "#8ec4f1",
    300: "#63ace8",
    400: "#3994e0",
    500: "#1f7bc6",
    600: "#135f9b",
    700: "#084470",
    800: "#031c2d",
    900: "#000f1d",
  },
};

const radii = {
  sm: ".25rem 0 .25rem 0",
  md: ".5rem 0 .5rem 0",
  lg: "1rem 0 1rem 0",
  xl: "2rem 0 2rem 0",
};

const shadows = {
  outline: "0 0 0 3px rgba(47, 133, 90, 0.6)",
};

const fonts = {
  body: "'DM Sans', sans-serif",
  heading: "'DM Serif Display', serif",
};

const sizes = {
  container: {
    xl: "1220px",
  },
};

const overrides = {
  colors,
  fonts,
  radii,
  shadows,
  components,
  styles,
  sizes,
};

export default extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  ...overrides,
});
