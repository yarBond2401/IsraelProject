"use client"
import React from "react"
import Header from "@/components/Header"
import { Box, Button, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

import "swiper/css"
import "swiper/css/navigation"

import {
  DiagnosticWrapper,
  DiagnosticContent,
  DiagnosticImageSection,
  DiagnosticImageSectionBody,
  DiagnosticImage,
  DiagnosticTitle,
} from "./styled"

import DiagnosticSwiper from "./components/DiagnosticSlider"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "כלי אבחוני - עיר חכמה | תוכנית דיגיטלית לרשויות",
  description:
    "הכלי האבחוני מאפשר לרשויות מקומיות להתמקד בפרויקטים רלוונטיים בהתאם לאתגרים, מטרות ותחומי עניין תוך שימוש בגישות של עיר חכמה.",
}
const Diagnostic = () => {
  return (
    <DiagnosticWrapper>
      <Header isOnMainPage={false} />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns:
            "0.9375rem 1fr minmax(auto, 100px) 1fr 0.9375rem",
        }}
      >
        <DiagnosticContent>
          <Box
            sx={{
              flex: 1,
              padding: "60px 16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Image
                src="/images/svg/diagnostic/main-icon.png"
                alt="diagnostic-icon"
                width={90}
                height={90}
              />
              <DiagnosticTitle>כלי אבחוני עיר חכמה</DiagnosticTitle>
              <Typography
                sx={{ color: "#1e2120", fontSize: "14px", maxWidth: "450px" }}
              >
                הכלי האבחוני מותרתו התמקדויות בפרויקטים ללוונטיים לרשות המקומית
                בהתאם לאסטרטגיה, תחומי העניין, אתגרים והמטרות אותם הגדירה.
              </Typography>
            </Box>
            <DiagnosticSwiper />
            <Link href="/entry" style={{ textDecoration: "none" }}>
              <Button variant="back">חזור</Button>
            </Link>
          </Box>

          <DiagnosticImageSection>
            <DiagnosticImageSectionBody>
              <Typography sx={{ fontWeight: 700, mb: 2, fontSize: "24px" }}>
                עיר חכמה
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                עיר המשלבת טכנולוגיות מידע ותקשורת עם מאמצים אחרים לארגון,
                לעיצוב ולתכנון בעיר, על מנת לשפר שירותים, לפשט ולזרז תהליכים
                בירוקרטיים ולעודד לזהות פתרונות חדשים לניהול המורכבות העירונית –
                זאת במטרה לשפר את איכות החיים ואת הקיימות של העיר.
              </Typography>
            </DiagnosticImageSectionBody>
            <DiagnosticImage
              src="/images/webp/diagnostic-background.jpg"
              fill
              alt="diagnostic-background"
            />
          </DiagnosticImageSection>
        </DiagnosticContent>
      </Box>
    </DiagnosticWrapper>
  )
}

export default Diagnostic
