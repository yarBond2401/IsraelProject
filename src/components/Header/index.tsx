"use client"
import React, { useCallback, useEffect, useState } from "react"
import { Box, Button } from "@mui/material"
import Link from "next/link"
import Image from "next/image"
import { LOGOS } from "./constants"
import {
  BlackHeaderLink,
  HeaderContainer,
  HeaderContent,
  HeaderLink,
  HeaderWrapper,
  LogosContainer,
  PurpleHeaderLink,
} from "./styled"
import SearchInput from "./components/SearchInput"
import BurgerMenu from "./components/MenuBurger"
import { HeaderProps } from "@/interfaces/header"
const Header: React.FC<HeaderProps> = ({ isOnMainPage = true }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 60
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])
  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev)
  }, [])
  return (
    <HeaderWrapper isMainPage={isOnMainPage} scrolled={scrolled}>
      <HeaderContainer>
        <LogosContainer>
          {LOGOS.map((logo, index) => (
            <Link href="/" key={index}>
              <Image
                src={`/images/svg/header/${logo.name}.png`}
                width={logo.width}
                height={logo.heigth}
                alt={logo.name}
              />
            </Link>
          ))}
        </LogosContainer>
        <HeaderContent sx={{ display: { xs: "none", lg: "flex" } }}>
          <Box
            sx={{
              display: "flex",
              gap: "25px",
              alignItems: "center",
            }}
          >
            {isOnMainPage && <Button variant="secondary">הרשמה</Button>}
            {isOnMainPage && <HeaderLink href="/">כניסה</HeaderLink>}
            {!isOnMainPage && (
              <PurpleHeaderLink href="/">אזור אישי</PurpleHeaderLink>
            )}
            {!isOnMainPage && (
              <BlackHeaderLink href="/">כלי אבחוני</BlackHeaderLink>
            )}
          </Box>
          <SearchInput isMainPage={isOnMainPage} />
        </HeaderContent>
        <BurgerMenu
          isOpen={menuOpen}
          toggleMenu={toggleMenu}
          isMainPage={isOnMainPage}
        />
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
