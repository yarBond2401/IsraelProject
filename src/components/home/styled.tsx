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
}))
export const HomePageWrapper = styled(Box)(() => ({
  paddingBlockStart: "200px",
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  overflow: "hidden",
}))
export const HomePageContainer = styled(Box)(({ theme }) => ({
  maxInlineSize: theme.breakpoints.values.xl,
  marginInline: "auto",
  paddingInline: "20px",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
}))
export const HomePageBody = styled(Box)(({ theme }) => ({
  flex: "1 0 auto",
  display: "flex",
  alignItems: "stretch",
  justifyContent: "flex-start",
  marginBlockEnd: "230px",
}))
export const HomePageInfoSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "35px",
}))
export const HomePageTitle = styled(Typography)(({ theme }) => ({
  maxInlineSize: "600px",
}))
export const HomePageButton = styled(Button)(({ theme }) => ({
  maxInlineSize: "450px",
}))
export const HomePageSidebar = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: -20,
  top: 0,
  width: "280px",
  paddingTop: "200px",
  height: "100%",
}))

export const ItemWrapper = styled(Box)(({ theme }) => ({
  padding: "15px",
  borderRadius: "20px",
  transition: "opacity 0.3s ease",
  "&:hover": {
    opacity: 0.7,
  },
}))
export const HomePageFooter = styled(Box)(({ theme }) => ({
  justifySelf: "flex-start",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
}))
export const HomePageContact = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
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
  position: "absolute",
  left: -20,
  bottom: -10,
}))
export const BackgroundImage = styled(Image)(() => ({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: -1,
}))
