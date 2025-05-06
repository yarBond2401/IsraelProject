"use client"

import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Link from "next/link"

export const HeaderWrapper = styled("header")<{ isMainPage?: boolean }>(
  ({ isMainPage }) => ({
    backgroundColor: isMainPage ? "transparent" : "#FFFFFF",
    inlineSize: "100%",
    position: "fixed",
    insetBlockStart: 0,
    insetInlineStart: 0,
    zIndex: 50,
    ...(isMainPage
      ? {}
      : {
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "5px",
            background:
              "linear-gradient(90deg, #30B4B4 30%, #867AB3 50%, #A020F0 100%)",
            zIndex: 51,
          },
        }),
  })
)

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
      display: " none",
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
  color: "#000",
  transition: "color 0.3s ease",
  "&:hover": {
    color: theme.palette.primary.light,
  },
}))
export const PurpleHeaderLink = styled(Link)(({ theme }) => ({
  color: "#a93f99",
  transition: "color 0.3s ease",
  "&:hover": {
    color: theme.palette.primary.light,
  },
}))
export const HeaderContent = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  columnGap: "50px",
}))
