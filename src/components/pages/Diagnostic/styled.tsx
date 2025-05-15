"use client"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Image from "next/image"
import { Typography } from "@mui/material"

interface DiagnosticCardProps {
  isMainItem?: boolean
}

export const DiagnosticWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}))
export const DiagnosticContent = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  paddingTop: "50px",
  gridColumn: "1/6",
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  [theme.breakpoints.down(1124)]: {
    flexDirection: "column",
  },
}))
export const DiagnosticBody = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: "100px 16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("lg")]: {
    paddingBlockEnd: "30px",
  },
}))
export const DiagnosticCards = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBlockEnd: "50px",
  [theme.breakpoints.down(550)]: {
    flexDirection: "column",
    alignItems: "center",
  },
}))
export const DiagnosticCard = styled("article", {
  shouldForwardProp: (prop) => prop !== "isMainItem",
})<DiagnosticCardProps>(({ theme, isMainItem }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: isMainItem ? theme.palette.common.white : "#fbfbfb",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: isMainItem
    ? "0 4px 20px rgba(0, 0, 0, 0.1)"
    : "5px 2px 10px rgba(0, 0, 0, 0.1)",
  inlineSize: isMainItem ? "300px" : "200px",
  blockSize: isMainItem ? "150px" : "120px",
  transition: "all 0.3s ease",
  textAlign: "center",
  zIndex: isMainItem ? 2 : 1,
  [theme.breakpoints.down("lg")]: {
    inlineSize: isMainItem ? "200px" : "150px",
    blockSize: isMainItem ? "100px" : "50px",
  },
  "& > p": {
    color: isMainItem ? theme.palette.custom.purple : "#000",
    fontSize: "16px",
    fontWeight: 700,
    marginBlockEnd: isMainItem ? "5px" : 0,
  },
}))
export const DiagnosticCardTitle = styled(Typography)(() => ({}))
export const DiagnosticTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.custom.purple,
  fontWeight: 700,
  marginBlockEnd: "10px",
}))
export const DiagnosticImageSection = styled(Box)(() => ({
  flexBasis: "40%",
  height: "100%",
  position: "relative",
  display: "flex",
  padding: "50px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}))
export const DiagnosticImageSectionBody = styled(Box)(({ theme }) => ({
  padding: "50px",
  flexBasis: "200px",
  position: "relative",
  zIndex: 2,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    padding: "20px",
  },
}))
export const DiagnosticImage = styled(Image)(() => ({
  position: "absolute",
  inlineSize: "100%",
  blockSize: "100%",
  inset: 0,
  objectFit: "cover",
}))
