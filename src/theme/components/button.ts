import { Components, Theme } from "@mui/material"

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true
    secondary: true
    gradient: true
    forward: true
    back: true
  }

  interface ButtonPropsSizeOverrides {
    big: true
  }
  interface ButtonPropsColorOverrides {
    purple: true
    green: true
  }
}

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
        style: ({ theme }) => ({
          fontSize: "12px",
          color: theme.palette.custom.purple,
          backgroundColor: theme.palette.common.white,
          fontWeight: 300,
          "&:hover": {
            backgroundColor: "#ccc7c7",
          },
        }),
      },
      {
        props: { variant: "secondary" },
        style: () => ({
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
        style: () => ({
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
          variant: "back",
        },
        style: ({ theme }) => ({
          backgroundColor: theme.palette.common.white,
          border: "1px solid #cbcbcb",
          borderRadius: "20px",
          padding: "5px 10px",
          color: "#cbcbcb",
          fontSize: "14px",
          transition: "opacity 0.3s ease",
          "&:hover": {
            opacity: 0.7,
          },
        }),
      },
      {
        props: { variant: "forward" },
        style: ({ theme }) => ({
          padding: "5px",
          color: theme.palette.common.white,
          borderRadius: "40px",
          minInlineSize: "200px",
          fontSize: "14px",
          transition: "0.3s ease background-color",
        }),
      },
      {
        props: { variant: "forward", color: "purple" },
        style: ({ theme }) => ({
          padding: "5px",
          backgroundColor: theme.palette.custom.purple,
          color: theme.palette.common.white,
          borderRadius: "40px",
          minInlineSize: "200px",
          fontSize: "14px",
          transition: "0.3s ease background-color",
          "&:hover": {
            backgroundColor: "#c74db2",
          },
        }),
      },
      {
        props: { variant: "forward", color: "green" },
        style: ({ theme }) => ({
          padding: "5px",
          backgroundColor: theme.palette.custom.green,
          color: theme.palette.common.white,
          borderRadius: "40px",
          minInlineSize: "200px",
          fontSize: "14px",
          "&:hover": {
            backgroundColor: "#3dd0c1",
          },
        }),
      },
      {
        props: { variant: "forward", size: "big", color: "purple" },
        style: ({ theme }) => ({
          padding: "10px 20px",
          color: theme.palette.common.white,
          fontSize: "18px",
          borderRadius: "40px",
          backgroundColor: theme.palette.custom.purple,
        }),
      },
      {
        props: { variant: "forward", size: "big", color: "green" },
        style: ({ theme }) => ({
          padding: "10px 20px",
          fontSize: "18px",
          color: theme.palette.common.white,
          borderRadius: "40px",
          backgroundColor: theme.palette.custom.green,
        }),
      },
    ],
  },
}
