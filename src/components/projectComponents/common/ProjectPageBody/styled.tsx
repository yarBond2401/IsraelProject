"use client"

import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"

export const ProjectWrapper = styled(Box)(({ theme }) => ({}))
export const ProjectMainSection = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.primary.main,
  columnGap: "60px",

  [theme.breakpoints.down("lg")]: {
    flexDirection: "column-reverse",
    alignItems: "center",
    paddingInline: "20px",
    rowGap: "20px",
  },
}))
