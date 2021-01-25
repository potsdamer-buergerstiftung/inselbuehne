import { extendTheme } from "@chakra-ui/react";

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
  },
};

const colors = {
  brand: {},
  dark: "#0d0221",
};

const radii = {
  sm: ".25rem 0 .25rem 0",
  md: ".5rem 0 .5rem 0",
  lg: "1rem 0 1rem 0",
};

const shadows = {
  outline: "0 0 0 3px rgba(47, 133, 90, 0.6)",
};

const fonts = {
  body: "'DM Sans', sans-serif",
  heading: "'DM Serif Display', serif",
};

const overrides = {
  colors,
  fonts,
  radii,
  shadows,
  components,
};

export default extendTheme(overrides);
