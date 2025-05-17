"use client"
import { Box, CircularProgress, styled, Typography } from "@mui/material"

export const CircleWrapper = styled(Box)(({ theme }) => ({
  position: "fixed",
  insetBlockStart: 200,
  insetInlineEnd: 30,
  zIndex: 1000,
  display: "inline-flex",
  backgroundColor: "#fff",
  borderRadius: "50%",
  padding: "10px",
  [theme.breakpoints.down("sm")]: {
    insetBlockStart: 100,
    insetInlineEnd: 200,
  },
}))

export const StyledCircularProgress = styled(CircularProgress)(() => ({
  position: "relative",
  color: "transparent",
  zIndex: 1,
  "& .MuiCircularProgress-circle": {
    strokeLinecap: "round",
    stroke: `url(#progressGradient)`,
  },
}))
export const BackgroundCircle = styled(CircularProgress)({
  position: "absolute",
  color: "#E6E6E6",
  zIndex: 0,
})

export const TextContainer = styled(Box)({
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})
export const IndicatorValue = styled(Typography)(({ theme }) => ({
  color: theme.palette.custom.purple,
  fontWeight: 700,
}))
export const IndicatorTitle = styled(Typography)(({ theme }) => ({
  color: "#909090",
  fontSize: "12px",
  [theme.breakpoints.down("md")]: {
    fontSize: "8px",
  },
}))
