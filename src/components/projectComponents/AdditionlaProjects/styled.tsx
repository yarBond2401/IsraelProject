"use client"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"

export const AdditionalProjectsWrapper = styled(Box)(() => ({
  zIndex: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}))
export const AdditionalProjectsSection = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isAdditional",
})<{ isAdditional?: boolean }>(({ theme, isAdditional }) => ({
  paddingBlock: "50px",
  paddingInline: "50px",
  backgroundColor: isAdditional ? theme.palette.primary.main : "#ebebeb",
  width: "100%",
  zIndex: 10,
  [theme.breakpoints.down("md")]: {
    paddingBlock: "20px",
    paddingInline: "20px",
  },
}))

export const AdditionalProjectsContainer = styled(Box)(() => ({
  maxInlineSize: "1900px",
  marginInline: "auto",
}))
export const AdditionalProjectsHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBlockEnd: "40px",
  gap: "10px",
  [theme.breakpoints.down("sm")]: {
    "& a": {
      width: "100%",
    },
    "& button": {
      width: "100%",
    },
    flexDirection: "column",
  },
}))
export const AdditionalProjectsCards = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "20px",
  justifyContent: "center",
  justifyItems: "center",
  marginBlockEnd: "40px",
  [theme.breakpoints.down(1100)]: {
    gridTemplateColumns: "repeat(2,1fr)",
  },
  [theme.breakpoints.down(615)]: {
    gridTemplateColumns: "1fr",
  },
}))
