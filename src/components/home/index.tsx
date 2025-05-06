import React from "react"
import {
  BackgroundImage,
  HomePageBody,
  HomePageButton,
  HomePageContact,
  HomePageContainer,
  HomePageFooter,
  HomePageInfoSection,
  HomePageSidebar,
  HomePageSlider,
  HomePageTitle,
  HomePageWrapper,
  ItemWrapper,
  LinkWrapper,
  PageContainer,
} from "./styled"
import Header from "../Header"
import { Box, Typography } from "@mui/material"
import { FOOTER_LINKS, LINKS } from "./constants"
import Link from "next/link"
import Image from "next/image"
import SliderComponent from "./components/HeroSlider"
function WelcomePage() {
  return (
    <PageContainer>
      <Header />
      <main>
        <HomePageWrapper>
          <HomePageContainer>
            <HomePageBody>
              <HomePageInfoSection>
                <HomePageTitle variant="h1">
                  מחברים את העולם המוניציפלי לכלים, טכנולוגיות ולפרקטיקות
                  המובילות בעולם
                </HomePageTitle>
                <Link href="/entry" style={{ textDecoration: "none" }}>
                  <HomePageButton variant="gradient" size="big">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "10px",
                        width: "100%",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: "18px",
                        }}
                      >
                        נסו את הכלים האבחוניים לרשות המקומית
                      </Typography>
                      <Image
                        src="/images/svg/arrow-button.png"
                        width={15}
                        height={15}
                        alt="button-icon"
                      ></Image>
                    </Box>
                  </HomePageButton>
                </Link>
              </HomePageInfoSection>
              <HomePageSidebar>
                <Typography sx={{ display: "block", marginBlockEnd: "25px" }}>
                  למה להצטרף לתוכנית?
                </Typography>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
                >
                  {LINKS.map((link, index) => (
                    <Link href="/" key={index}>
                      <ItemWrapper sx={{ backgroundColor: link.bgColor }}>
                        <Typography>{link.text}</Typography>
                      </ItemWrapper>
                    </Link>
                  ))}
                </Box>
              </HomePageSidebar>
            </HomePageBody>
            <HomePageFooter>
              <HomePageContact>
                <Link href="/">
                  <Image
                    src="/images/svg/call-icon.png"
                    width={53}
                    height={55}
                    alt="phone-icon"
                  />
                </Link>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "30px" }}
                >
                  {FOOTER_LINKS.map((link, index) => (
                    <LinkWrapper key={index}>
                      <Link href="/">{link.value}</Link>
                    </LinkWrapper>
                  ))}
                </Box>
              </HomePageContact>
              <HomePageSlider>
                <SliderComponent />
              </HomePageSlider>
            </HomePageFooter>
          </HomePageContainer>
        </HomePageWrapper>
      </main>
      <BackgroundImage
        src="/images/webp/hero-background.png"
        fill
        alt="hero-baclground"
      />
    </PageContainer>
  )
}

export default WelcomePage
