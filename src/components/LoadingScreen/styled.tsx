// "use client"

// import { styled } from "@mui/material/styles"

// import { Box, Typography } from "@mui/material"
// import Image from "next/image"

// export const LoadingWrapper = styled(Box)(({ theme }) => ({
//   minHeight: "100vh",
//   backgroundColor: theme.palette.common.white,
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
// }))
// export const LoadingContainer = styled(Box)(({ theme }) => ({
//   maxInlineSize: theme.breakpoints.values.xl,
//   marginInline: "auto",
// }))
// export const LoadingContent = styled(Box)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   gap: "20px",
// }))
// export const LoadingImages = styled(Box)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   gap: "20px",
// }))
// export const LoadingTitle = styled(Typography)(({ theme }) => ({
//   color: theme.palette.custom.purple,
//   fontSize: "18px",
//   textAlign: "center",
// }))
// export const RocketImage = styled(Image)(({ theme }) => ({}))
// export const RocketImageSmall = styled(Image)(({ theme }) => ({}))
// export const CloudImage = styled(Image)(({ theme }) => ({}))
"use client"

import { styled, keyframes } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Image from "next/image"

// Animations
const rotateRight = keyframes`
  0%,100% { transform: rotate(0deg); }
  50%     { transform: rotate(90deg); }
`
const rotateLeft = keyframes`
  0%,100% { transform: rotate(0deg); }
  50%     { transform: rotate(-45deg); }
`
const driftLeft = keyframes`
  0%,100% { transform: translateX(0); }
  50%     { transform: translateX(-30px); }
`
const driftRight = keyframes`
  0%,100% { transform: translateX(0); }
  50%     { transform: translateX(30px); }
`
const pulse = keyframes`
  0%,100% { opacity: 1; }
  50%     { opacity: 0.6; }
`

export const LoadingWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: theme.palette.common.white,
}))

export const LoadingContainer = styled(Box)(({ theme }) => ({
  maxInlineSize: theme.breakpoints.values.xl,
  marginInline: "auto",
}))

export const LoadingContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  alignItems: "center",
}))

export const LoadingImages = styled(Box)(() => ({
  display: "flex",
  gap: "20px",
}))

export const LoadingTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.custom.purple,
  fontWeight: 700,
  fontSize: "20px",
  animation: `${pulse} 2s ease-in-out infinite`,
}))

export const RocketImage = styled(Image)(() => ({
  transform: "translateX(-50%)",
  animation: `${rotateRight} 3s ease-in-out infinite`,
}))

export const RocketImageSmall = styled(Image)(() => ({
  animation: `${rotateLeft} 2s ease-in-out infinite`,
}))

export const CloudImage = styled(Image)(({ className }) => ({
  position: "absolute",
  bottom: 0,
  ...(className === "cloud-left"
    ? { left: 0, animation: `${driftLeft} 5s ease-in-out infinite` }
    : { right: 0, animation: `${driftRight} 5s ease-in-out infinite` }),
}))
