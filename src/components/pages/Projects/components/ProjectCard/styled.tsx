"use client"
import { Box, Button, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
export const ProjectCardWrapper = styled("article")(({ theme }) => ({
  position: "relative",
  width: "100%",
  aspectRatio: 4 / 3,
  overflow: "hidden",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  transform: "translate(0,10px",
  opacity: 0,
  animation: "fadeIn 1s ease forwards",
  [theme.breakpoints.down("md")]: {
    aspectRatio: 5 / 3,
  },
  "@keyframes fadeIn": {
    from: { opacity: 0, transform: "translate(0,10px" },
    to: { opacity: 1, transform: "translate(0,0)" },
  },
}))

export const ProjectCardContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  padding: "20px",
  zIndex: 3,
}))
export const ProjectCardButtons = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  flexWrap: "wrap",
}))
export const ProjectCardButton = styled(Button)(({ theme }) => ({
  padding: "5px",
  backgroundColor: theme.palette.common.white,
  color: theme.palette.custom.purple,
  fontWeight: "300",
  fontSize: "12px",
}))
export const ProjectCardTitle = styled(Typography)(({ theme }) => ({
  justifySelf: "flex-end",
  fontSize: "24px",
  color: theme.palette.common.white,
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}))
export const ProjectCardBackground = styled(Typography)(() => ({
  position: "absolute",
  inlineSize: "100%",
  blockSize: "100%",
  insetBlockStart: 0,
  insetInlineStart: 0,
  objectFit: "cover",
  zIndex: 2,
}))
