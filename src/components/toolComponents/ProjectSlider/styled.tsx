"use client"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Image from "next/image"

export const ProjectSliderWrapper = styled(Box)(({ theme }) => ({
  flex: "0 1 44%",
  paddingBlockStart: "130px",
  maxWidth: "100%",
  minWidth: 0,
  position: "relative",
  [theme.breakpoints.down("lg")]: {
    paddingBlockStart: 0,
    maxWidth: "100%",
  },
}))

export const SliderContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: "33.5%",
  left: "57%",
  zIndex: 10,
  width: "44%",
  [theme.breakpoints.down("lg")]: {
    position: "relative",
    top: "unset",
    left: "unset",
    width: "100%",
    maxWidth: "100%",
    paddingInline: 0,
    paddingBlockStart: 0,
  },
}))

export const SliderArrows = styled(Box)(() => ({
  position: "absolute",
  insetInlineEnd: 30,
  insetBlockEnd: 20,
  display: "flex",
  pointerEvents: "none",
  zIndex: 2,
  gap: "10px",
}))

export const SliderArrow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "all",
  cursor: "pointer",
  zIndex: 3,
  backgroundColor: theme.palette.primary.main,
  padding: "10px",
  borderRadius: "50%",
}))

// export const ImageWrapper = styled(Box)(({ theme }) => ({
//   position: "relative",
//   aspectRatio: "1 / 1",
//   width: "100%",
//   maxWidth: "410px",
//   margin: "0 auto",
//   transform: "translate(-10%,-50px)",
//   [theme.breakpoints.down("md")]: {
//     transform: "translate(0, 0)",
//   },
//   "& img": {
//     objectFit: "cover",
//     borderRadius: "10px",
//   },
// }))
export const ImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  aspectRatio: "1 / 1",
  width: "100%",
  maxWidth: "410px",
  marginInline: "auto",
  transform: "translate(-10%, -50px)",
  [theme.breakpoints.down("lg")]: {
    transform: "none",
  },

  "& img": {
    objectFit: "cover",
    borderRadius: "10px",
  },
}))

export const SwiperWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "visible",
  borderRadius: "10px",
  background:
    "linear-gradient(140deg, #30B4B4 30%,  #867AB3 50%,  #A020F0 100%)",

  "& .swiper": {
    overflow: "visible",
  },

  "& .swiper-slide": {
    transition: "opacity 0.3s ease",
  },

  "& .swiper-slide:not(.swiper-slide-active)": {
    pointerEvents: "none",
    opacity: 0,
  },
  [theme.breakpoints.up("lg")]: {
    "& .swiper-slide:not(.swiper-slide-active)": {
      pointerEvents: "none",
      opacity: 0,
    },
  },
  [theme.breakpoints.down("md")]: {
    padding: "10px",
  },
}))
export const CallIcon = styled(Image)(() => ({
  position: "absolute",
  insetBlockEnd: 20,
  insetInlineStart: 30,
  cursor: "pointer",
  zIndex: "5",
}))
