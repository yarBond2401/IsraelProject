"use client"
import React, { useEffect, useState } from "react"
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
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"
import { enqueueSnackbar } from "notistack"

import {
  fetchRawProjectsFromSheet,
  normalizeRawRows,
  ProjectRecord,
} from "@/utils/projectsManage"

import "swiper/css"
import "swiper/css/navigation"

export default function SliderComponent() {
  const router = useRouter()
  const { user } = useAuth()

  const [projects, setProjects] = useState<ProjectRecord[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchRawProjectsFromSheet()
      .then(normalizeRawRows)
      .then((records) => {
        setProjects(records)
      })
      .catch((err) => {
        console.error("Failed to load slider projects:", err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  function handleSlideClick(projectId: string) {
    if (!user) {
      enqueueSnackbar("עליך להתחבר לפני שתמשיך", { variant: "error" })
      router.push("/signIn")
    } else {
      router.push(`/project/${projectId}`)
    }
  }

  if (isLoading) {
    return null
  }

  if (projects.length === 0) {
    return null
  }

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
            {projects.slice(0, 5).map((proj) => {
              const title = proj.jsonData.headerTitle
              const id = proj.id

              return (
                <SwiperSlide key={id}>
                  <SlideContent>
                    <SlideBody>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: 700,
                          display: "block",
                          marginBlockEnd: "20px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleSlideClick(id)}
                      >
                        {title}
                      </Typography>
                      <Button
                        variant="primary"
                        onClick={() => handleSlideClick(id)}
                      >
                        גלו עוד
                      </Button>
                    </SlideBody>
                    <Box
                      onClick={() => handleSlideClick(id)}
                      sx={{ cursor: "pointer" }}
                    >
                      <ImageWrapper>
                        <Image
                          src="/images/webp/projects/slider/public-eng-1.png"
                          alt={`slide-${id}`}
                          width={200}
                          height={150}
                        />
                      </ImageWrapper>
                    </Box>
                  </SlideContent>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </SwiperWrapper>
      </Box>
    </SliderContainer>
  )
}
