"use client"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
export const EntryWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  overflowX: "hidden",
}))
export const EntryContainer = styled(Box)(({ theme }) => ({
  maxInlineSize: theme.breakpoints.values.xl,
  marginInline: "auto",
  paddingInline: "20px",
}))
export const EntryContent = styled(Box)(({ theme }) => ({
  marginBlockStart: "108px",
  gridColumn: "1/6",
  rowGap: "1rem",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    columnGap: "3px",
    display: "flex",
  },
}))
