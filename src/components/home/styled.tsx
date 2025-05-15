"use client"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import { Button, Typography } from "@mui/material"
import Link from "next/link"
import Image from "next/image"

export const PageContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
}))
export const HomePageWrapper = styled(Box)(({ theme }) => ({
  paddingBlockStart: "200px",
  inlineSize: "100%",
  overflow: "hidden",
  flexGrow: 1,
  [theme.breakpoints.down("lg")]: {
    paddingBlockStart: "100px",
  },
}))
export const HomePageContainer = styled(Box)(({ theme }) => ({
  maxInlineSize: theme.breakpoints.values.xl,
  marginInline: "auto",
  paddingInline: "20px",
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  overflow: "visible",
  justifyContent: "space-between",
  blockSize: "100%",
}))
export const HomePageBody = styled(Box)(({ theme }) => ({
  flex: "1 1 auto",
  display: "flex",
  alignItems: "stretch",
  justifyContent: "flex-start",
  marginBlockEnd: "200px",
  [theme.breakpoints.down(850)]: {
    marginBlockEnd: "20px",
  },
}))
export const HomePageInfoSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "35px",
  paddingInlineStart: "50px",
  [theme.breakpoints.down("lg")]: {
    alignItems: "center",
    paddingInlineStart: "0",
  },
}))
export const HomePageTitle = styled(Typography)(({ theme }) => ({
  maxInlineSize: "600px",
  [theme.breakpoints.down("lg")]: {
    maxInlineSize: "none",
    textAlign: "center",
  },
}))
export const ButtonWrapper = styled(Link)(({ theme }) => ({
  maxInlineSize: "450px",
  [theme.breakpoints.down("lg")]: {
    maxInlineSize: "none",
    inlineSize: "100%",
  },
}))
export const HomePageButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    inlineSize: "100%",
    textAlign: "center",
  },
}))
export const HomePageSidebar = styled(Box)(({ theme }) => ({
  position: "absolute",
  insetInlineEnd: -20,
  insetBlockStart: 0,
  inlineSize: "280px",
  paddingBlockStart: "200px",
  blockSize: "100%",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}))

export const ItemWrapper = styled(Box)(() => ({
  padding: "15px",
  borderRadius: "20px",
  transition: "opacity 0.3s ease",
  "&:hover": {
    opacity: 0.7,
  },
}))
export const HomePageFooter = styled(Box)(({ theme }) => ({
  justifySelf: "flex-end",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  inlineSize: "100%",
  gap: "15px",
  [theme.breakpoints.down(850)]: {
    flexDirection: "column-reverse",
    alignItems: "center",
    paddingBlockEnd: "20px",
  },
}))
export const HomePageContact = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  gap: "25px",
}))
export const LinkWrapper = styled(Box)(({ theme }) => ({
  "& a": {
    color: "#fff",
    opacity: 0.7,
    textTransform: "uppercase",
    fontWeight: 500,
    transition: "color 0.3s ease-in-out",
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
}))

export const HomePageSlider = styled(Box)(({ theme }) => ({
  maxInlineSize: "100%",
  [theme.breakpoints.up(850)]: {
    position: "absolute",
    left: -20,
    bottom: -10,
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

export const BackgroundImage = styled(Image)(() => ({
  inlineSize: "100%",
  blockSize: "100%",
  objectFit: "cover",
  pointerEvents: "none",
}))
