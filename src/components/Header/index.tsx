"use client"

import React, { useCallback, useEffect, useState } from "react"
import { Box, Button, Typography } from "@mui/material"
import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/contexts/AuthContext"
import {
  HeaderContainer,
  HeaderContent,
  HeaderWrapper,
  LogosContainer,
  LogOutButton,
  PurpleHeaderLink,
} from "./styled"
import BurgerMenu from "./components/MenuBurger"
import { HeaderProps } from "@/interfaces/header"

const Header: React.FC<HeaderProps> = ({ isOnMainPage = true }) => {
  const { user: username, logout } = useAuth()

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev)
  }, [])

  const handleLogout = () => {
    logout()
  }

  return (
    <HeaderWrapper isMainPage={isOnMainPage} scrolled={scrolled}>
      <HeaderContainer>
        <LogosContainer>
          <Link href="/">
            <Image
              src={`/images/svg/header/header-logo-1.png`}
              width={174}
              height={70}
              alt="header-logo"
            />
          </Link>
        </LogosContainer>

        <HeaderContent sx={{ display: { xs: "none", lg: "flex" } }}>
          <Box sx={{ display: "flex", gap: "25px", alignItems: "center" }}>
            {isOnMainPage && !username && (
              <Link href="/signIn">
                <Button variant="secondary">הרשמה</Button>
              </Link>
            )}

            {isOnMainPage && username && (
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Typography
                  sx={{ fontWeight: 600, fontSize: "14px", color: "#fff" }}
                >
                  שלום, {username}
                </Typography>
                <LogOutButton variant="secondary" onClick={handleLogout}>
                  התנתק
                </LogOutButton>
              </Box>
            )}

            {!isOnMainPage && username && (
              <PurpleHeaderLink>{username}</PurpleHeaderLink>
            )}
            {/* {!isOnMainPage && (
              <BlackHeaderLink href="/">כלי אבחוני</BlackHeaderLink>
            )} */}
          </Box>
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
