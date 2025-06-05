// "use client"
// import React, { useState } from "react"
// import { Swiper, SwiperSlide } from "swiper/react"
// import { Keyboard, Navigation } from "swiper/modules"
// import { Box, Typography } from "@mui/material"
// import Image from "next/image"
// import Link from "next/link"
// import { DIAGNOSTIC_CARDS } from "../../constants"
// import { SlideCard, StyledSwiperWrapper, DiagnosticCardTitle } from "./styled"
// import { useTheme, useMediaQuery } from "@mui/material"

// const DiagnosticSwiper = () => {
//   const theme = useTheme()
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"))
//   const [activeIndex, setActiveIndex] = useState(
//     DIAGNOSTIC_CARDS.findIndex((card) => card.title === "חתום עליון")
//   )

//   return (
//     <StyledSwiperWrapper>
//       <Swiper
//         modules={[Navigation, Keyboard]}
//         slidesPerView={3}
//         centeredSlides
//         loop
//         initialSlide={activeIndex}
//         direction={isMobile ? "vertical" : "horizontal"}
//         keyboard={{ enabled: true }}
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//         style={{ maxHeight: isMobile ? "300px" : "auto" }}
//       >
//         {DIAGNOSTIC_CARDS.map((card, index) => (
//           <SwiperSlide key={index}>
//             <SlideCard active={index === activeIndex}>
//               <DiagnosticCardTitle>{card.title}</DiagnosticCardTitle>
//               {card.title === "תועלות וציפיות" && (
//                 <Link href="/projects">
//                   <Box sx={{ display: "flex", alignItems: "center" }}>
//                     <Typography sx={{ color: "#939393", fontSize: "12px" }}>
//                       להמשך
//                     </Typography>
//                     <Image
//                       src="/images/svg/diagnostic/arrow-icon.png"
//                       width={10}
//                       height={10}
//                       alt="arrow-icon"
//                     />
//                   </Box>
//                 </Link>
//               )}
//               {card.title === "שאלון" && (
//                 <Link href="/questionnaire">
//                   <Box sx={{ display: "flex", alignItems: "center" }}>
//                     <Typography sx={{ color: "#939393", fontSize: "12px" }}>
//                       לשאלון
//                     </Typography>
//                     <Image
//                       src="/images/svg/diagnostic/arrow-icon.png"
//                       width={10}
//                       height={10}
//                       alt="arrow-icon"
//                     />
//                   </Box>
//                 </Link>
//               )}
//             </SlideCard>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </StyledSwiperWrapper>
//   )
// }

// export default DiagnosticSwiper

"use client"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Keyboard, Navigation } from "swiper/modules"
import { Box, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { DIAGNOSTIC_CARDS } from "../../constants"
import { SlideCard, StyledSwiperWrapper, DiagnosticCardTitle } from "./styled"
import { useTheme, useMediaQuery } from "@mui/material"

const DiagnosticSwiper = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [activeIndex, setActiveIndex] = useState(
    DIAGNOSTIC_CARDS.findIndex((card) => card.title === "חתום עליון")
  )

  return (
    <StyledSwiperWrapper>
      <Swiper
        modules={[Navigation, Keyboard]}
        slidesPerView={3}
        centeredSlides
        loop
        initialSlide={activeIndex}
        direction={isMobile ? "vertical" : "horizontal"}
        keyboard={{ enabled: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        style={{ maxHeight: isMobile ? "300px" : "auto" }}
      >
        {DIAGNOSTIC_CARDS.map((card, index) => (
          <SwiperSlide key={index}>
            <SlideCard active={index === activeIndex}>
              <DiagnosticCardTitle>{card.title}</DiagnosticCardTitle>
              {card.title === "תחומי עניין" && (
                <Link href="/projects">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ color: "#939393", fontSize: "12px" }}>
                      לצפייה בספקים
                    </Typography>
                    <Image
                      src="/images/svg/diagnostic/arrow-icon.png"
                      width={10}
                      height={10}
                      alt="arrow-icon"
                    />
                  </Box>
                </Link>
              )}
              {card.title === "שאלון" && (
                <Link href="/questionnaire">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ color: "#939393", fontSize: "12px" }}>
                      לשאלון
                    </Typography>
                    <Image
                      src="/images/svg/diagnostic/arrow-icon.png"
                      width={10}
                      height={10}
                      alt="arrow-icon"
                    />
                  </Box>
                </Link>
              )}
            </SlideCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSwiperWrapper>
  )
}

export default DiagnosticSwiper
