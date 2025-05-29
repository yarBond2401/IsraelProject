"use client"
import React, { memo } from "react"
import { Button, Typography } from "@mui/material"

import { BurgerMenuProps } from "@/interfaces/header"
import { BurgerIcon, BurgerMenuContent, BurgerMenuWrapper } from "./styled"
import { useAuth } from "@/contexts/AuthContext"
import Link from "next/link"

const BurgerMenu: React.FC<BurgerMenuProps> = ({
  isOpen,
  toggleMenu,
  isMainPage = true,
}) => {
  const { user: username, logout } = useAuth()
  return (
    <>
      <BurgerIcon
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        isOpen={isOpen}
        onClick={toggleMenu}
        isMainPage={isMainPage}
        sx={{ display: { xs: "flex", lg: "none" } }}
      >
        <span></span>
        <span></span>
        <span></span>
      </BurgerIcon>

      <BurgerMenuWrapper isOpen={isOpen}>
        <BurgerMenuContent>
          {!username ? (
            <Link href="/signIn">
              <Button variant="secondary">הרשמה</Button>
            </Link>
          ) : (
            <>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#000",
                  marginBlockEnd: "10px",
                }}
              >
                שלום, {username}
              </Typography>
              <Button variant="secondary" onClick={logout}>
                התנתק
              </Button>
            </>
          )}
        </BurgerMenuContent>
      </BurgerMenuWrapper>
    </>
  )
}

export default memo(BurgerMenu)
