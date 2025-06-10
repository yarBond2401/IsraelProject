"use client"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material"

export const EntrySectionWrapper = styled("section")<{ backgroundSrc: string }>(
  ({ theme, backgroundSrc }) => ({
    minHeight: "100vh",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    flexBasis: "50%",
    paddingInline: "20px",
    paddingBlockStart: "9%",
    paddingBlockEnd: "20px",
    overflow: "hidden",
    backgroundImage: `url(${backgroundSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    color: theme.palette.common.white,
    willChange: "background-position",
    [theme.breakpoints.down("md")]: {
      minHeight: "calc(100vh)",
      alignItems: "center",
      paddingBlock: "30px",
      flexBasis: "100%",
    },
  })
)

export const EntrySectionContent = styled(Box)(() => ({
  position: "relative",
  zIndex: 2,
}))

export const EntrySectionImageWrapper = styled(Box)(({ theme }) => ({
  marginBlockEnd: "15px",
  [theme.breakpoints.down("md")]: {
    marginBlockEnd: "5px",
  },
}))

export const EntrySectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "30px",
  marginBlockEnd: "20px",
  [theme.breakpoints.down("md")]: {
    marginBlockEnd: "10px",
  },
}))

export const EntrySectionDescription = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "18px",
  marginBlockEnd: "60px",
  [theme.breakpoints.down("lg")]: {
    marginBlockEnd: "30px",
    fontSize: "16px",
  },
}))
