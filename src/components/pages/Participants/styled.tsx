"use client"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material"
export const ParticipantsWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  minHeight: "100vh",
}))
export const ParticipantsContainer = styled(Box)(({ theme }) => ({
  maxInlineSize: theme.breakpoints.values.xl,
  marginInline: "auto",
  paddingInline: "20px",
}))
export const ParticipantsContent = styled(Box)(({ theme }) => ({
  paddingBlockStart: "200px",
  marginInline: "auto",
  backgroundColor: theme.palette.primary.main,
  paddingBlockEnd: "50px",
  [theme.breakpoints.down("md")]: {
    paddingBlockStart: "130px",
  },
}))
export const ParticipantsHeader = styled(Box)(() => ({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBlockEnd: "50px",
}))
export const ParticipantsTitle = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  color: theme.palette.custom.purple,
  fontWeight: 700,
  marginBlockEnd: "20px",
}))
export const ParticipantsDescription = styled(Typography)(() => ({
  fontSize: "16px",
  color: "#898c8b",
  maxInlineSize: "900px",
}))
export const ParticipantsForm = styled(Box)(() => ({
  marginInline: "auto",
  maxInlineSize: "900px",
}))
export const ParticipantsFormBody = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  marginBlockEnd: "20px",
}))
export const ParticipantsInputs = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "10px",
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(2,1fr)",
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "auto",
  },
}))
export const ParticipantButtons = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}))
