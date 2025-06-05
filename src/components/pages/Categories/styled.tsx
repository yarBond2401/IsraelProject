"use client"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Image from "next/image"
import { Button, Typography } from "@mui/material"
import Link from "next/link"
export const CategoriesWrapper = styled(Box)(() => ({
  position: "relative",
  minHeight: "100vh",
}))
export const CategoriesInnerWrapper = styled(Box)(() => ({}))
export const CategoriesContainer = styled(Box)(({ theme }) => ({
  maxInlineSize: theme.breakpoints.values.xl,
  marginInline: "auto",
  paddingInline: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}))

export const CategoriesContent = styled(Box)(() => ({
  paddingBlockStart: "150px",
  paddingBlockEnd: "30px",
}))
export const CategoriesBody = styled(Box)(({ theme }) => ({
  maxInlineSize: "800px",
  textAlign: "center",
  color: theme.palette.common.white,
  marginBlockEnd: "100px",
  [theme.breakpoints.down("lg")]: {
    marginBlockEnd: "30px",
  },
}))
export const CategoriesTitle = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 700,
  marginBlockEnd: "30px",
  [theme.breakpoints.down("lg")]: {
    marginBlockEnd: "10px",
  },
}))
export const CategoriesGrid = styled(Box)(({ theme }) => ({
  marginBlockEnd: "100px",
  display: "grid",
  gap: "40px 20px",
  justifyItems: "center",
  gridTemplateColumns: "repeat(8, 1fr)",
  "& > :nth-of-type(1)": { gridColumn: "1 / span 2" },
  "& > :nth-of-type(2)": { gridColumn: "3 / span 2" },
  "& > :nth-of-type(3)": { gridColumn: "5 / span 2" },
  "& > :nth-of-type(4)": { gridColumn: "7 / span 2" },
  "& > :nth-of-type(5)": { gridColumn: "2 / span 2" },
  "& > :nth-of-type(6)": { gridColumn: "4 / span 2" },
  "& > :nth-of-type(7)": { gridColumn: "6 / span 2" },
  [theme.breakpoints.down("lg")]: {
    marginBlockEnd: "30px",
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
    "& > *": {
      gridColumn: "auto !important",
    },
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
}))

export const CategoryText = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 700,
  color: theme.palette.common.white,
}))
export const CategoryLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: "12px",
  fontWeight: 300,
}))
export const CategoriesNav = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}))
export const BackButton = styled(Button)(() => ({
  backgroundColor: "transparent",
}))
export const ForwardButton = styled(Button)(({ theme }) => ({
  fontSize: "14px",
  padding: "5px 20px",
  backgroundColor: "#a83b96",
  color: theme.palette.common.white,
  transition: "opacity 0.3s ease",
  "&:hover": {
    opacity: 0.9,
  },
}))

export const BackgroundContainer = styled(Box)(() => ({
  position: "fixed",
  top: 0,
  left: 0,
  inlineSize: "100%",
  blockSize: "100%",
  zIndex: -1,
}))
export const CategoriesBackground = styled(Image)(() => ({
  inlineSize: "100%",
  blockSize: "100%",
  objectFit: "cover",
  pointerEvents: "none",
}))
