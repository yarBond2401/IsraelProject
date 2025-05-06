"use client"
import React, { useState } from "react"
import Header from "@/components/Header"
import { CATEGORIES } from "./constants"
import {
  BackButton,
  CategoriesBackground,
  CategoriesBody,
  CategoriesContainer,
  CategoriesContent,
  CategoriesGrid,
  CategoriesNav,
  CategoriesTitle,
  CategoriesWrapper,
  CategoryLink,
  CategoryText,
  ForwardButton,
} from "./styled"
import { Box, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import InfoPanel from "./components/InfoPanel"
const Categories = () => {
  const [infoOpen, setInfoOpen] = useState(false)

  return (
    <CategoriesWrapper>
      <Header isOnMainPage={false} />
      <CategoriesContainer>
        <CategoriesContent>
          <CategoriesBody>
            <CategoriesTitle>חדשנות מוניציפאלית</CategoriesTitle>
            <Typography sx={{ fontSize: "14px" }}>
              החדשנות המוניציפאלית מאופיינת בחלוקה לשבעה מימדים. על-מנת שנוכל
              לאבחן את רמת החדשנות של הרשות המקומית, נבקש שתענה על שאלון המחולק
              על-פי אותם שבעה מימדים
            </Typography>
          </CategoriesBody>
          <CategoriesGrid>
            {CATEGORIES.map((category, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Image
                  src={category.iconSrc}
                  alt="category"
                  width={60}
                  height={57}
                />
                <CategoryText>{category.text}</CategoryText>
                {category.isWithLink && (
                  <CategoryLink
                    href="/"
                    onClick={(e) => {
                      e.preventDefault()
                      setInfoOpen(true)
                    }}
                  >
                    מידע נוסף&gt;
                  </CategoryLink>
                )}
              </Box>
            ))}
          </CategoriesGrid>
          <CategoriesNav>
            <Link href="/entry">
              <BackButton>חזור</BackButton>
            </Link>
            <Link href="/questionnaire">
              <ForwardButton>המשך לשאלון האבחון</ForwardButton>
            </Link>
          </CategoriesNav>
        </CategoriesContent>
      </CategoriesContainer>
      <CategoriesBackground
        src="/images/webp/categories-background.png"
        fill
        alt="categories-background"
      ></CategoriesBackground>
      <InfoPanel open={infoOpen} onClose={() => setInfoOpen(false)} />
    </CategoriesWrapper>
  )
}

export default Categories
