"use client"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import Image from "next/image"
import { Box, Button, Typography } from "@mui/material"
import {
  SliderContainer,
  SliderArrow,
  SlideContent,
  SwiperWrapper,
  SlideBody,
  ImageWrapper,
} from "./styled"
import { MAIN_SLIDES } from "../../constants"
import "swiper/css"
import "swiper/css/navigation"
import Link from "next/link"

const SliderComponent = () => {
  return (
    <SliderContainer>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "50px",
          }}
        >
          <Typography variant="body1">פרויקטים אחרונים</Typography>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <SliderArrow className="button-prev">
              <Image
                src="/images/svg/slider/arrow-next.png"
                width={40}
                height={40}
                alt="prev"
              />
            </SliderArrow>
            <SliderArrow className="button-next">
              <Image
                src="/images/svg/slider/arrow-prev.png"
                width={40}
                height={40}
                alt="next"
              />
            </SliderArrow>
          </Box>
        </Box>
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
            {MAIN_SLIDES.map((slide, index) => (
              <SwiperSlide key={index}>
                <SlideContent>
                  <SlideBody>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: 700,
                        display: "block",
                        marginBlockEnd: "20px",
                      }}
                    >
                      {slide.title}
                    </Typography>
                    <Link href={slide.redirectTo}>
                      <Button variant="primary">גלו עוד</Button>
                    </Link>
                  </SlideBody>
                  <Link href={slide.redirectTo} passHref>
                    <ImageWrapper>
                      <Image
                        src={slide.imageSrc}
                        alt={`slide-${slide.id}`}
                        width={200}
                        height={150}
                      />
                    </ImageWrapper>
                  </Link>
                </SlideContent>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperWrapper>
      </Box>
    </SliderContainer>
  )
}

export default SliderComponent
