"use client"

import Image from "next/image"
import { SlideData } from "@/interfaces/tools"
import {
  SliderContainer,
  SwiperWrapper,
  ImageWrapper,
  ProjectSliderWrapper,
  SliderArrow,
  SliderArrows,
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
            resizeObserver={true}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <ImageWrapper>
                  <Image
                    src="/images/webp/tools/slider/employee_innovation/slide-1.jpg"
                    fill
                    alt={`slide-${index}`}
                  />
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
        </SwiperWrapper>
      </SliderContainer>
    </ProjectSliderWrapper>
  )
}
