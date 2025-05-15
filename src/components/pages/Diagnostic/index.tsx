import React from "react"
import Header from "@/components/Header"
import { Box, Button, Typography } from "@mui/material"
import Image from "next/image"
import { DIAGNOSTIC_CARDS } from "./constants"
import Link from "next/link"
import {
  DiagnosticWrapper,
  DiagnosticContent,
  DiagnosticBody,
  DiagnosticCards,
  DiagnosticCard,
  DiagnosticImageSection,
  DiagnosticImageSectionBody,
  DiagnosticImage,
  DiagnosticCardTitle,
  DiagnosticTitle,
} from "./styled"
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
          <DiagnosticBody>
            <Box sx={{ textAlign: "center", marginBlockEnd: "30px" }}>
              <Image
                src="/images/svg/diagnostic/main-icon.png"
                alt="diagnostic-icon"
                width={90}
                height={90}
              />
              <DiagnosticTitle>כלי אבחוני עיר חכמה</DiagnosticTitle>
              <Typography
                sx={{
                  color: "#1e2120",
                  fontSize: "14px",
                  maxInlineSize: "450px",
                }}
              >
                הכלי האבחוני מותרתו התמקדויות בפרויקטים ללוונטיים לרשות המקומית
                בהתאם לאסטרטגיה, תחומי העניין, אתגרים והמטרות אותם הגדירה.
              </Typography>
            </Box>
            <DiagnosticCards>
              {DIAGNOSTIC_CARDS.map((card, index) => (
                <DiagnosticCard key={index} isMainItem={card.isMainItem}>
                  <DiagnosticCardTitle>{card.title}</DiagnosticCardTitle>
                  {card.isMainItem && (
                    <Link href="/projects">
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography sx={{ color: "#939393", fontSize: "12px" }}>
                          להמשך
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
                </DiagnosticCard>
              ))}
            </DiagnosticCards>
            <Link href="/entry" style={{ textDecoration: "none" }}>
              <Button variant="back">חזור</Button>
            </Link>
          </DiagnosticBody>
          <DiagnosticImageSection>
            <DiagnosticImageSectionBody>
              <Typography
                sx={{
                  fontWeight: 700,
                  marginBlockEnd: "20px",
                  fontSize: "24px",
                }}
              >
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
              src="/images/webp/diagnostic-background.png"
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
