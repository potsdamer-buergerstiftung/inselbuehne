import { extendTheme } from "@chakra-ui/react"

const components = {
    heading: {
        baseStyle: {
            fontWeight: "normal",
        },
    }
}

const colors = {
    brand: {},
    dark: "#0d0221",
}

const fonts = {
    body: "'DM Sans', sans-serif",
    heading: "'DM Serif Display', serif",
}

const overrides = {
    colors,
    fonts,
    components,
}

export default extendTheme(overrides)
