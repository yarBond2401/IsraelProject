"use client"

import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Link from "next/link"
import { Button, Typography } from "@mui/material"

export const HeaderWrapper = styled("header")<{
  isMainPage?: boolean
  scrolled?: boolean
}>(({ isMainPage, scrolled }) => ({
  backgroundColor: isMainPage
    ? scrolled
      ? "rgba(0, 0, 0, 0.5)"
      : "rgba(0, 0, 0, 0)"
    : "#FFFFFF",
  inlineSize: "100%",
  position: "fixed",
  insetBlockStart: 0,
  insetInlineStart: 0,
  zIndex: 50,
  backdropFilter: scrolled ? "blur(5px)" : "none",
  transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
  ...(isMainPage
    ? {
        "&::after": {
          content: '""',
          position: "absolute",
          insetBlockStart: "100%",
          insetInlineStart: 0,
          inlineSize: "100%",
          blockSize: "50px",
          background: scrolled
            ? "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)"
            : "none",
          zIndex: -1,
          pointerEvents: "none",
        },
      }
    : {
        "&::before": {
          content: '""',
          position: "absolute",
          insetBlockStart: 0,
          insetInlineEnd: 0,
          inlineSize: "100%",
          blockSize: "5px",
          background:
            "linear-gradient(90deg, #30B4B4 30%, #867AB3 50%, #A020F0 100%)",
          zIndex: 51,
        },
      }),
}))
export const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxInlineSize: theme.breakpoints.values.xl,
  paddingInline: "20px",
  marginInline: "auto",
  paddingBlock: "20px",
  columnGap: "15px",
}))
export const LogosContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "0px",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    "& a:nth-of-type(2)": {
      display: "none",
    },
  },
}))
export const HeaderLink = styled(Link)(({ theme }) => ({
  color: "#fff",
  transition: "color 0.3s ease",
  "&:hover": {
    color: theme.palette.primary.light,
  },
}))
export const BlackHeaderLink = styled(Link)(({ theme }) => ({
  fontSize: "14px",
  color: "#000",
  transition: "color 0.3s ease",
  "&:hover": {
    color: theme.palette.primary.light,
  },
}))
export const PurpleHeaderLink = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  fontSize: "16px",
  color: "#a93f99",
  transition: "color 0.3s ease",
  "&:hover": {
    color: theme.palette.primary.light,
  },
}))
export const LogOutButton = styled(Button)(() => ({
  maxInlineSize: "10px",
  inlineSize: "10px",
}))
export const HeaderContent = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  columnGap: "50px",
}))
