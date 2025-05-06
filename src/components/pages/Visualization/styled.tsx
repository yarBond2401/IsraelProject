"use client"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Image from "next/image"
import { Button, Typography } from "@mui/material"
export const VisualizationWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}))
export const VisualizationContent = styled(Box)(({ theme }) => ({
  paddingBlockStart: "110px",
  backgroundColor: theme.palette.primary.main,
  paddingBlockEnd: "50px",
  minHeight: "100vh",
}))
export const VisualizationHeader = styled(Box)(({ theme }) => ({
  paddingBlock: "30px",
  paddingInline: "20px",
  display: "flex",
  alignItems: "center",
  marginBlockEnd: "5px",
  justifyContent: "space-between",
  backgroundColor: "#fff",
}))
export const VisualizationImages = styled(Box)(({ theme }) => ({
  paddingBlockStart: "50px",
  display: "flex",
  backgroundColor: "#fff",
  gap: "5px",
  paddingBlockEnd: "300px",
}))
export const VisualizationImageWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flex: "1 1 auto",
}))

export const QuestionnaireButtons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}))
export const FurtherButton = styled(Button)(({ theme }) => ({
  padding: "5px",
  backgroundColor: theme.palette.custom.purple,
  color: theme.palette.common.white,
  borderRadius: "40px",
  minInlineSize: "200px",
  fontSize: "14px",
}))
export const BackButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  border: "1px solid #cbcbcb",
  borderRadius: "20px",
  padding: "5px 10px",
  color: "#cbcbcb",
  fontSize: "14px",
  transition: "opacity 0.3s ease",
  "&:hover": {
    opacity: 0.5,
  },
}))
