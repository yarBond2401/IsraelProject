"use client"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import { relative } from "path"

export const SliderContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "500px",
}))

export const SliderArrow = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  zIndex: 10,
  "&.swiper-button-disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
  "&::after": {
    display: "none",
  },
}))

export const SlideContent = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}))
export const SlideBody = styled(Box)(({ theme }) => ({
  maxInlineSize: "270px",
  transform: "translate(30px,0)",
}))
export const ImageWrapper = styled(Box)(({ theme }) => ({
  transform: "translate(10px,-35px)",
}))
export const SlideWrapper = styled(Box)(({ theme }) => ({}))

export const SwiperWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "visible",
  borderRadius: "10px",
  paddingBlock: "10px",
  background:
    "linear-gradient(90deg, #30B4B4 30%,  #867AB3 50%,  #A020F0 100%)",

  "& .swiper": {
    overflow: "visible",
  },

  "& .swiper-slide": {
    overflow: "visible",
    transition: "opacity 0.3s ease",
  },

  "& .swiper-slide:not(.swiper-slide-active)": {
    pointerEvents: "none",
    opacity: 0,
  },
}))
