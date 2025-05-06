import { BackgroundImage } from "@/components/home/styled"
import { Components, Theme } from "@mui/material"

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true
    secondary: true
    gradient: true
  }

  interface ButtonPropsSizeOverrides {
    big: true
  }
}

const commonStyles = {
  borderRadius: "40px",
  fontWeight: 400,
}

const createSecondaryGradientHover = (theme: Theme) => ({
  position: "relative",
  zIndex: 1,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundImage: theme.palette.custom.gradients.primaryGradient,
    opacity: 0,
    transition: "opacity 0.3s ease",
    zIndex: -1,
    borderRadius: "40px",
    transform: "scale(1.01)",
  },

  "&:hover": {
    color: theme.palette.secondary.main,
    "&::before": {
      opacity: 1,
    },
  },
})

const createPrimaryGradientHover = (theme: Theme) => ({
  position: "relative",
  zIndex: 1,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundImage: theme.palette.custom.gradients.primaryGradient,
    opacity: 0,
    transition: "opacity 0.3s ease",
    zIndex: -1,
    borderRadius: "39px",
  },

  "&:hover": {
    color: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
    "&::before": {
      opacity: 1,
    },
  },
})

const secondaryBaseStyles = (theme: Theme) => ({
  ...commonStyles,
  padding: "10px 40px",
  background: theme.palette.primary.light,
  color: theme.palette.primary.main,
  ...createSecondaryGradientHover(theme),
  fontWeight: 700,
})

export default <Components<Theme>>{
  MuiButton: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        textTransform: "uppercase",
        borderRadius: "40px",
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
        },
        "& .MuiTouchRipple-root": {
          zIndex: -1,
        },
      },
    },
    variants: [
      {
        props: { variant: "primary" },
        style: () => ({
          // ...commonStyles,
          padding: "5px 10px",
          backgroundColor: "#fff",
          color: "#b351a4",
          fontSize: 12,
          textTransform: "uppercase",
          borderRadius: "40px",
          fontWeight: 400,
          textAlign: "center",
          lineHeight: 1.3,
          transition: "backgroundColor 0.3 ease",
          "&:hover": {
            backgroundColor: "#d2caca",
          },
        }),
      },
      {
        props: { variant: "secondary" },
        style: ({ theme }) => ({
          padding: "8px 20px",
          fontWeight: 300,
          fontSize: 14,
          backgroundColor: "#15b0a1",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#19c3b2",
          },
        }),
      },
      {
        props: { variant: "gradient", size: "big" },
        style: ({ theme }) => ({
          padding: "15px 30px",
          transition: "backgroundImage 0.3s ease",
          backgroundImage:
            "linear-gradient(90deg, #A020F0 10%,#B277CC 30%, #867AB3 50%, #5A7D9A 70%, #30B4B4 90%)",
          color: "#fff",
          position: "relative",
          zIndex: 1,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundImage:
              "linear-gradient(270deg, #A020F0 10%,#B277CC 30%, #867AB3 50%, #5A7D9A 70%, #30B4B4 90%)",
            opacity: 0,
            transition: "opacity 0.5s ease",
            zIndex: -1,
            borderRadius: "40px",
          },

          "&:hover": {
            "&::before": {
              opacity: 1,
            },
          },
        }),
      },
      {
        props: {
          variant: "secondary",
          size: "big",
        },
        style: ({ theme }) => ({
          ...secondaryBaseStyles(theme),
          padding: "12px 32px",
          maxHeight: "48px",
          fontWeight: 700,
        }),
      },
    ],
  },
}
