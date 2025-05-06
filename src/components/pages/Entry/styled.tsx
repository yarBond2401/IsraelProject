"use client"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Image from "next/image"
import { Button } from "@mui/material"
export const EntryWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
}))
export const EntryContainer = styled(Box)(({ theme }) => ({
  maxInlineSize: theme.breakpoints.values.xl,
  marginInline: "auto",
  paddingInline: "20px",
}))
export const EntryContent = styled(Box)(({ theme }) => ({
  paddingBlockStart: "50px",
  gridColumn: "1/6",
  rowGap: "1rem",
  [theme.breakpoints.up("md")]: {
    columnGap: "3px",
    display: "flex",
  },
}))
