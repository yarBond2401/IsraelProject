"use client"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Image from "next/image"
import { Button, Typography } from "@mui/material"
export const QuestionnaireWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}))
export const QuestionnaireContainer = styled(Box)(({ theme }) => ({
  maxInlineSize: theme.breakpoints.values.xl,
  marginInline: "auto",
  paddingInline: "20px",
}))
export const QuestionnaireContent = styled(Box)(({ theme }) => ({
  paddingBlockStart: "200px",
  marginInline: "auto",
  backgroundColor: theme.palette.primary.main,
  paddingBlockEnd: "50px",
}))
export const QuestionnaireHeader = styled(Box)(({ theme }) => ({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBlockEnd: "50px",
}))
export const QuestionnaireTitle = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  color: theme.palette.custom.purple,
  fontWeight: 700,
  marginBlockEnd: "20px",
}))
export const QuestionnaireDescription = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: "#898c8b",
  maxInlineSize: "800px",
}))
export const QuestionnaireForm = styled(Box)(({ theme }) => ({
  marginInline: "auto",
  maxInlineSize: "900px",
}))
export const QuestionnaireFormBody = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  marginBlockEnd: "20px",
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
