// "use client"
// import React from "react"
// import {
//   BackgroundContainer,
//   BackgroundImage,
//   ButtonWrapper,
//   HomePageBody,
//   HomePageButton,
//   HomePageContact,
//   HomePageContainer,
//   HomePageFooter,
//   HomePageInfoSection,
//   HomePageSidebar,
//   HomePageSlider,
//   HomePageTitle,
//   HomePageWrapper,
//   ItemWrapper,
//   LinkWrapper,
//   PageContainer,
// } from "./styled"
// import Header from "../Header"
// import { Box, Typography } from "@mui/material"
// import { FOOTER_LINKS, LINKS } from "./constants"
// import Link from "next/link"
// import Image from "next/image"
// import SliderComponent from "./components/HeroSlider"
// import { useEffect, useState } from "react"

// function WelcomePage() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   const [showAuthNotice, setShowAuthNotice] = useState(false)

//   useEffect(() => {
//     const user = localStorage.getItem("loggedInUser")
//     setIsLoggedIn(!!user)
//   }, [])
//   return (
//     <PageContainer>
//       <Header />
//       <HomePageWrapper>
//         <HomePageContainer>
//           <HomePageBody>
//             <HomePageInfoSection>
//               <HomePageTitle variant="h1">
//                 מחברים את העולם המוניציפלי לכלים, טכנולוגיות ולפרקטיקות המובילות
//                 בעולם
//               </HomePageTitle>
//               <Box sx={{ position: "relative", display: "inline-block" }}>
//                 <Box
//                   onClick={(e) => {
//                     if (!isLoggedIn) {
//                       e.preventDefault()
//                       setShowAuthNotice(true)
//                       setTimeout(() => setShowAuthNotice(false), 2000)
//                     }
//                   }}
//                   component="a"
//                   href={isLoggedIn ? "/entry" : "#"}
//                   sx={{ textDecoration: "none" }}
//                 >
//                   <HomePageButton variant="gradient" size="big">
//                     <Box
//                       sx={{
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         gap: "10px",
//                         width: "100%",
//                       }}
//                     >
//                       <Typography
//                         sx={{
//                           fontWeight: 700,
//                           fontSize: { xs: "14px", sm: "18px" },
//                         }}
//                       >
//                         נסו את הכלים האבחוניים לרשות המקומית
//                       </Typography>
//                       <Image
//                         src="/images/svg/arrow-button.png"
//                         width={15}
//                         height={15}
//                         alt="button-icon"
//                       />
//                     </Box>
//                   </HomePageButton>
//                 </Box>

//                 <Box
//                   sx={{
//                     position: "absolute",
//                     top: "-50px",
//                     left: "50%",
//                     transform: showAuthNotice
//                       ? "translateX(-50%) scale(1)"
//                       : "translateX(-50%) scale(0.95)",
//                     backgroundColor: "#fff",
//                     color: "#a83b96",
//                     padding: "10px 16px",
//                     borderRadius: "8px",
//                     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
//                     fontSize: "14px",
//                     fontWeight: 600,
//                     whiteSpace: "nowrap",
//                     pointerEvents: "none",
//                     opacity: showAuthNotice ? 1 : 0,
//                     visibility: showAuthNotice ? "visible" : "hidden",
//                     transition:
//                       "opacity 0.4s ease, transform 0.4s ease, visibility 0.4s",
//                     zIndex: 20,
//                   }}
//                 >
//                   עליך להתחבר לפני שתמשיך
//                 </Box>
//               </Box>
//             </HomePageInfoSection>
//             <HomePageSidebar>
//               <Typography sx={{ display: "block", marginBlockEnd: "25px" }}>
//                 למה להצטרף לתוכנית?
//               </Typography>
//               <Box
//                 sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
//               >
//                 {LINKS.map((link, index) => (
//                   <Link href="/" key={index}>
//                     <ItemWrapper sx={{ backgroundColor: link.bgColor }}>
//                       <Typography>{link.text}</Typography>
//                     </ItemWrapper>
//                   </Link>
//                 ))}
//               </Box>
//             </HomePageSidebar>
//           </HomePageBody>
//           <HomePageFooter>
//             <HomePageContact>
//               <Link href="/">
//                 <Image
//                   src="/images/svg/call-icon.png"
//                   width={53}
//                   height={55}
//                   alt="phone-icon"
//                 />
//               </Link>
//               <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
//                 {FOOTER_LINKS.map((link, index) => (
//                   <LinkWrapper key={index}>
//                     <Link href="/">{link.value}</Link>
//                   </LinkWrapper>
//                 ))}
//               </Box>
//             </HomePageContact>
//             <HomePageSlider>
//               <SliderComponent />
//             </HomePageSlider>
//           </HomePageFooter>
//         </HomePageContainer>
//       </HomePageWrapper>
//       <BackgroundContainer>
//         <BackgroundImage
//           src="/images/webp/hero-background.png"
//           fill
//           alt="home-background"
//         />
//       </BackgroundContainer>
//     </PageContainer>
//   )
// }

// export default WelcomePage
// src/components/home/index.tsx
"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"
import {
  BackgroundContainer,
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
  const { user } = useAuth()
  const router = useRouter()
  const [showAuthNotice, setShowAuthNotice] = useState(false)

  const handleTryTools = () => {
    if (!user) {
      setShowAuthNotice(true)
      setTimeout(() => {
        setShowAuthNotice(false)
        router.push("/signIn")
      }, 1000)
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

                {showAuthNotice && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "-50px",
                      left: "50%",
                      transform: "translateX(-50%) scale(1)",
                      backgroundColor: "#fff",
                      color: "#a83b96",
                      padding: "10px 16px",
                      borderRadius: "8px",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                      fontSize: "14px",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      pointerEvents: "none",
                      opacity: 1,
                      visibility: "visible",
                      transition:
                        "opacity 0.4s ease, transform 0.4s ease, visibility 0.4s",
                      zIndex: 20,
                    }}
                  >
                    עליך להתחבר לפני שתמשיך
                  </Box>
                )}
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
              <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
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
      <BackgroundContainer>
        <BackgroundImage
          src="/images/webp/hero-background.png"
          fill
          alt="home-background"
        />
      </BackgroundContainer>
    </PageContainer>
  )
}

export default WelcomePage
