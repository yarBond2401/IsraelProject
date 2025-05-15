"use client"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material"
export const VisualizationWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  minHeight: "100vh",
  textAlign: "center",
}))
export const VisualizationContent = styled(Box)(({ theme }) => ({
  paddingBlockStart: "113px",
  backgroundColor: theme.palette.primary.main,
  minHeight: "calc(100vh-113px)",
}))
export const VisualizationHeader = styled(Box)(({ theme }) => ({
  textAlign: "start",
  paddingInline: "20px",
  display: "flex",
  alignItems: "center",
  paddingBlock: "5px",
  justifyContent: "space-between",
  backgroundColor: "#fff",
  marginBlockEnd: "5px",
  gap: "10px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}))
export const VisualizationCharts = styled(Box)(() => ({
  paddingBlockStart: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "50px",
  flexWrap: "wrap",
  backgroundColor: "#fff",
}))
export const ChartTitle = styled(Typography)(({ theme }) => ({
  fontSize: "30px",
  color: theme.palette.custom.purple,
  fontWeight: 700,
}))
