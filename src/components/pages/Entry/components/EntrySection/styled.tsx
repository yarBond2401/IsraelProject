"use client"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Image from "next/image"
import { Button, Typography } from "@mui/material"
export const EntrySectionWrapper = styled("section")(({ theme }) => ({
  minHeight: "100vh",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  flexBasis: "50%",
  padding: "80px 20px",
  [theme.breakpoints.down("md")]: {
    minHeight: "auto",
    paddingBlock: "80px",
    flexBasis: "100%",
  },
}))
export const EntrySectionContent = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
}))
export const EntrySectionImageWrapper = styled(Box)(({ theme }) => ({
  marginBlockEnd: "15px",
}))
export const EntrySectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "30px",
  marginBlockEnd: "20px",
}))
export const EntrySectionDescription = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "18px",
  marginBlockEnd: "60px",
}))
export const EntrySectionButton = styled(Button)(({ theme }) => ({
  padding: "10px 20px",
  color: theme.palette.common.white,
  borderRadius: "40px",
  transition: "opacity 0.3s ease",
  "&:hover": {
    opacity: 0.9,
  },
}))
export const EntrySectionBackground = styled(Image)(({ theme }) => ({
  position: "absolute",
  inlineSize: "100%",
  blockSize: "100%",
  insetBlockStart: 0,
  insetInlineStart: 0,
  objectFit: "cover",
}))
