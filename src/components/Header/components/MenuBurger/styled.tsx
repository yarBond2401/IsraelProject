"use client"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import { BurgerIconProps, BurgerProps } from "@/interfaces/header"
import Link from "next/link"
export const BurgerIcon = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isOpen" && prop !== "isMainPage",
})<BurgerIconProps>(({ isOpen, isMainPage }) => ({
  inlineSize: "32px",
  blockSize: "32px",
  position: "relative",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  padding: "5px",
  zIndex: 60,

  "& span": {
    inlineSize: "100%",
    blockSize: "3px",
    backgroundColor: isMainPage ? "#15b0a1" : "#000",
    borderRadius: "3px",
    transition: "all 0.3s linear",
    transformOrigin: "1px",

    "&:nth-of-type(1)": {
      transform: isOpen ? "rotate(45deg)" : "rotate(0)",
    },
    "&:nth-of-type(2)": {
      opacity: isOpen ? "0" : "1",
      transform: isOpen ? "translateX(20px)" : "translateX(0)",
    },
    "&:nth-of-type(3)": {
      transform: isOpen ? "rotate(-45deg)" : "rotate(0)",
    },
  },
}))

export const BurgerMenuWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<BurgerProps>(({ theme, isOpen }) => ({
  position: "fixed",
  insetBlockStart: 0,
  insetInlineStart: 0,
  blockSize: "45vh",
  inlineSize: "100%",
  backgroundColor: theme.palette.common.white,
  display: "flex",
  flexDirection: "column",
  visibility: isOpen ? "visible" : "hidden",
  opacity: isOpen ? 1 : 0,
  transition: "all 0.3s ease-in-out",
  transform: isOpen ? "translateY(0)" : "translateY(-100%)",
  zIndex: 55,
  boxShadow: isOpen ? "0 8px 10px -5px rgba(0,0,0,0.2)" : "none",

  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
}))

export const BurgerMenuContent = styled(Box)(() => ({
  padding: "120px 40px 40px 40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "15px",
  blockSize: "100%",
  inlineSize: "100%",
}))

export const HeaderLink = styled(Link)(({ theme }) => ({
  color: "#fff",
  transition: "color 0.3s ease",
  "&:hover": {
    color: theme.palette.primary.light,
  },
}))
export const BlackHeaderLink = styled(Link)(({ theme }) => ({
  fontSize: "20px",
  color: "#000",
  transition: "color 0.3s ease",
  "&:hover": {
    color: theme.palette.primary.light,
  },
}))
export const PurpleHeaderLink = styled(Link)(({ theme }) => ({
  fontSize: "20px",
  color: "#a93f99",
  transition: "color 0.3s ease",
  "&:hover": {
    color: theme.palette.primary.light,
  },
}))
