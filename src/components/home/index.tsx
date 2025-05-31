"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"
import {
  BackgroundContainer,
  BackgroundImage,
  HomePageBody,
  HomePageButton,
  HomePageContainer,
  HomePageFooter,
  HomePageInfoSection,
  HomePageSidebar,
  HomePageSlider,
  HomePageTitle,
  HomePageWrapper,
  ItemWrapper,
  PageContainer,
} from "./styled"
import Header from "../Header"
import { Alert, Box, Typography } from "@mui/material"
import { LINKS } from "./constants"
import Image from "next/image"
import SliderComponent from "./components/HeroSlider"
import { enqueueSnackbar } from "notistack"

function WelcomePage() {
  const { user } = useAuth()
  const router = useRouter()

  const handleTryTools = () => {
    if (!user) {
      enqueueSnackbar("עליך להתחבר לפני שתמשיך", {
        variant: "error",
      })
      router.push("/signIn")
    } else {
      router.push("/entry")
    }
  }

  return (
    <PageContainer>
      <Header />
      <HomePageWrapper>
        <HomePageContainer>
          <HomePageBody>
            <HomePageInfoSection>
              <HomePageTitle variant="h1">
                מחברים את העולם המוניציפלי לכלים, טכנולוגיות ולפרקטיקות המובילות
                בעולם
              </HomePageTitle>
              <Box sx={{ position: "relative", display: "inline-block" }}>
                <Box
                  onClick={(e) => {
                    e.preventDefault()
                    handleTryTools()
                  }}
                  sx={{ textDecoration: "none" }}
                >
                  <HomePageButton variant="gradient" size="big">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        width: "100%",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: { xs: "14px", sm: "18px" },
                        }}
                      >
                        נסו את הכלים האבחוניים לרשות המקומית
                      </Typography>
                      <Image
                        src="/images/svg/arrow-button.png"
                        width={15}
                        height={15}
                        alt="button-icon"
                      />
                    </Box>
                  </HomePageButton>
                </Box>
              </Box>
            </HomePageInfoSection>
            <HomePageSidebar>
              <Typography sx={{ display: "block", marginBlockEnd: "25px" }}>
                למה להצטרף לתוכנית?
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
              >
                {LINKS.map((link, index) => (
                  <ItemWrapper
                    sx={{ backgroundColor: link.bgColor }}
                    key={index}
                  >
                    <Typography>{link.text}</Typography>
                  </ItemWrapper>
                ))}
              </Box>
            </HomePageSidebar>
          </HomePageBody>
          <HomePageFooter>
            {/* <HomePageContact>
              <Link href="/">
                <Image
                  src="/images/svg/call-icon.png"
                  width={53}
                  height={55}
                  alt="phone-icon"
                />
              </Link>
              <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
                {FOOTER_LINKS.map((link, index) => (
                  <LinkWrapper key={index}>
                    <Link href="/">{link.value}</Link>
                  </LinkWrapper>
                ))}
              </Box>
            </HomePageContact> */}
            <HomePageSlider>
              <SliderComponent />
            </HomePageSlider>
          </HomePageFooter>
        </HomePageContainer>
      </HomePageWrapper>
      <BackgroundContainer>
        <BackgroundImage
          src="/images/webp/hero-background.jpg"
          fill
          alt="home-background"
        />
      </BackgroundContainer>
    </PageContainer>
  )
}

export default WelcomePage
