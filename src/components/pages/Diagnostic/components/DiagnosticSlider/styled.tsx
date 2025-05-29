"use client"
import { Box, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
export const StyledSwiperWrapper = styled(Box)(({ theme }) => ({
  maxWidth: "600px",
  marginBlockEnd: "50px",
  [theme.breakpoints.down("md")]: {
    marginBlockEnd: "0px",
  },
  display: "flex",
  ".swiper": {
    overflow: "visible",
    textAlign: "center",
  },
  ".swiper-slide": {
    opacity: 0.6,
    transform: "scale(0.9)",
    transition: "all 0.4s ease",
    [theme.breakpoints.down("md")]: {
      opacity: 0.1,
    },
  },
  ".swiper-slide-active": {
    opacity: 1,
    transform: "scale(1.1)",
    zIndex: 3,
    "& p": {
      color: theme.palette.custom.purple,
    },
  },
}))

export const SlideCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ theme, active }) => ({
  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: active ? theme.palette.common.white : "#fbfbfb",
  padding: active ? "30px" : "20px",
  borderRadius: "12px",
  boxShadow: active
    ? "0 6px 24px rgba(0, 0, 0, 0.15)"
    : "2px 2px 8px rgba(0, 0, 0, 0.1)",
  width: "200px",
  height: "120px",
  transition: "all 0.3s ease",
  textAlign: "center",
  zIndex: active ? 2 : 1,
  "& > p": {
    color: active ? theme.palette.custom.purple : "#000",
    fontSize: "16px",
    fontWeight: 700,
    marginBottom: active ? "5px" : 0,
  },
}))

export const DiagnosticCardTitle = styled(Typography)(() => ({}))
