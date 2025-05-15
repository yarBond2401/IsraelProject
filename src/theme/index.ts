import {
  ThemeOptions,
  PaletteOptions,
  TypographyVariantsOptions,
} from "@mui/material/styles"
import customComponents from "@/theme/components/index"
import { AdaptiveTypography } from "@/utils/AdaptiveTypography"

function makePalette(): PaletteOptions {
  const primaryColor = "#f5f5f5"
  const secondaryColor = "#f5f5f5"
  const accentColor = "#4FD4E0"

  return {
    common: {
      white: "#fff",
      black: "#000",
    },
    primary: {
      main: primaryColor,
      light: accentColor,
    },
    secondary: {
      main: secondaryColor,
    },

    grey: {
      A100: "#7B879B",
    },
    custom: {
      purple: "#a83b96",
      green: "#15b0a1",
      gradients: {
        primaryGradient: `linear-gradient(315deg, #1c0c35 1%, #643a99 18%, #9b90d4 39%, #9fc2de 52%, #0342c6 83%, #00156b 100%)`,
        secondaryGradient: `linear-gradient(180deg, #2c4062 0%, ${primaryColor} 100%)`,
      },
    },
  }
}

function makeTypography(): TypographyVariantsOptions {
  return {
    fontFamily: "'Satoshi Variable', sans-serif",
    fontSize: 18,
    h1: {
      fontSize: AdaptiveTypography(28, 42),
      lineHeight: 1.6,
      fontWeight: 700,
      textTransform: "uppercase",
      position: "relative",
    },
    h2: {
      //   fontSize: AdaptiveTypography(28, 40),
      lineHeight: 1.3,
      fontWeight: 700,
      textTransform: "uppercase",
      zIndex: 2,
      position: "relative",
      "&::before": {
        content: '""',
        position: "absolute",
        height: "24px",
        backgroundColor: "#AB90D4",
        zIndex: -1,
      },
    },
    h3: {
      //   fontSize: AdaptiveTypography(24, 32),
      fontWeight: 700,
    },
    h4: {
      //   fontSize: AdaptiveTypography(22, 28),
      fontWeight: 700,
    },
    h5: {
      //   fontSize: AdaptiveTypography(18, 22),
      fontWeight: 300,
      color: "#7b879b",
    },
    body1: {
      lineHeight: 1.4,
      fontWeight: 400,
    },
    body2: {
      fontSize: 17,
      lineHeight: 1.4,
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: 22,
      lineHeight: 1.4,
      fontWeight: 300,
    },
    caption: {
      fontSize: 18,
      lineHeight: 1.4,
      fontWeight: 700,
    },
    button: {
      fontSize: 18,
      fontWeight: 500,
    },
  }
}

function getTheme(): ThemeOptions {
  return {
    palette: makePalette(),
    typography: makeTypography(),
    components: customComponents,
    breakpoints: {
      values: {
        xs: 200,
        sm: 479.98,
        md: 767.98,
        lg: 991.98,
        xl: 1400,
      },
    },
  }
}

export default getTheme

declare module "@mui/material/styles" {
  interface CustomPalette {
    purple: string
    green: string
    gradients: {
      primaryGradient: string
      secondaryGradient: string
    }
  }

  interface Palette {
    custom: CustomPalette
  }

  interface PaletteOptions {
    custom: CustomPalette
  }
}
