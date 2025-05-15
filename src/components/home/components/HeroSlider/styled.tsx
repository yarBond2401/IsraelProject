"use client"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"

export const SliderContainer = styled(Box)(() => ({
  width: "100%",
  maxWidth: "500px",
}))

export const SliderArrow = styled(Box)(() => ({
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
  padding: "10px",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
    alignItems: "center",
  },
}))
export const SlideBody = styled(Box)(({ theme }) => ({
  maxInlineSize: "270px",
  [theme.breakpoints.up("md")]: {
    transform: "translate(30px,0)",
  },
}))
export const ImageWrapper = styled(Box)(() => ({
  transform: "translate(10px,-35px)",
}))
export const SlideWrapper = styled(Box)(() => ({}))

export const SwiperWrapper = styled(Box)(() => ({
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
