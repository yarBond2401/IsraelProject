"use client"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material"
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
export const QuestionnaireHeader = styled(Box)(() => ({
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
export const QuestionnaireDescription = styled(Typography)(() => ({
  fontSize: "16px",
  color: "#898c8b",
  maxInlineSize: "800px",
}))
export const QuestionnaireForm = styled(Box)(() => ({
  marginInline: "auto",
  maxInlineSize: "900px",
}))
export const QuestionnaireFormBody = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  marginBlockEnd: "20px",
}))
export const QuestionnaireButtons = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}))
