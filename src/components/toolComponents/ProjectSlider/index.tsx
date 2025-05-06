"use client"
import { Box, Button, Divider, Typography } from "@mui/material"
import Link from "next/link"
import Image from "next/image"
import { SlideData } from "@/interfaces/tools"
import {
  SliderContainer,
  SwiperWrapper,
  ImageWrapper,
  ProjectSliderWrapper,
  SliderArrow,
  SliderArrows,
  CallIcon,
} from "./styled"
import "swiper/css"
import "swiper/css/navigation"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
interface Props {
  slides: SlideData[]
}

export const ToolSlider: React.FC<Props> = ({ slides }) => {
  return (
    <ProjectSliderWrapper>
      <Box sx={{ display: "flex", gap: "20px", paddingInlineStart: "100px" }}>
        <Link style={{ color: "#000", fontSize: "14px" }} href="/">
          ראשי
        </Link>
        <Link style={{ color: "#000", fontSize: "14px" }} href="/projects">
          כלים
        </Link>
        <Link
          style={{ color: "#000", fontSize: "14px" }}
          href="/project/hackathon"
        >
          האקתון
        </Link>
      </Box>
      <SliderContainer>
        <SwiperWrapper>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".button-next",
              prevEl: ".button-prev",
            }}
            watchOverflow={true}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <ImageWrapper>
                  <Image src={slide.imageSrc} fill alt={`slide-${index}`} />
                  <SliderArrows>
                    <SliderArrow className="button-prev">
                      <Image
                        src="/images/svg/arrow-right.svg"
                        width={15}
                        height={15}
                        alt="prev"
                      />
                    </SliderArrow>
                    <SliderArrow className="button-next">
                      <Image
                        src="/images/svg/arrow-left.svg"
                        width={15}
                        height={15}
                        alt="next"
                      />
                    </SliderArrow>
                  </SliderArrows>
                </ImageWrapper>
              </SwiperSlide>
            ))}
          </Swiper>
          <CallIcon
            src="/images/svg/call-icon.png"
            alt="call-icon"
            width={57}
            height={55}
          />
        </SwiperWrapper>
      </SliderContainer>
    </ProjectSliderWrapper>
  )
}
