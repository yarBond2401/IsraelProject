"use client"

import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Link from "next/link"

export const FooterWrapper = styled("header")(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  paddingBlock: "20px",
  position: "relative",
  zIndex: 50,
}))

export const FooterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxInlineSize: theme.breakpoints.values.xl,
  paddingInline: "20px",
  marginInline: "auto",
  gap: "10px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}))
export const FooterBody = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    gap: "5px",
    flexDirection: "column",
  },
}))
export const Navigation = styled("nav")(() => ({}))
export const FooterLinks = styled("ul")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    gap: "10px",
  },
}))
export const FooterLinkWrapper = styled("li")(() => ({}))
export const FooterLink = styled(Link)(({ theme }) => ({
  color: "#6e6e6e",
  transition: "color 0.3s ease",
  "&:hover": {
    color: theme.palette.primary.light,
  },
}))
export const FooterContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.down("sm")]: {
    gap: "5px",
  },
}))
