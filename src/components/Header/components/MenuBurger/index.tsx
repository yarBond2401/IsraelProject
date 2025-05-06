"use client"
import React, { memo } from "react"
import { Button } from "@mui/material"

import { BurgerMenuProps } from "@/interfaces/header"
import {
  BlackHeaderLink,
  BurgerIcon,
  BurgerMenuContent,
  BurgerMenuWrapper,
  HeaderLink,
  PurpleHeaderLink,
} from "./styled"
import SearchInput from "../SearchInput"

const BurgerMenu: React.FC<BurgerMenuProps> = ({
  isOpen,
  toggleMenu,
  isMainPage = true,
}) => {
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
          {isMainPage && <Button variant="secondary">הרשמה</Button>}
          {isMainPage && <HeaderLink href="/">כניסה</HeaderLink>}
          {!isMainPage && (
            <PurpleHeaderLink href="/">אזור אישי</PurpleHeaderLink>
          )}
          {!isMainPage && (
            <BlackHeaderLink href="/">כלי אבחוני</BlackHeaderLink>
          )}
          <SearchInput isMainPage={false} />
        </BurgerMenuContent>
      </BurgerMenuWrapper>
    </>
  )
}

export default memo(BurgerMenu)
