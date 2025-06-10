"use client"
import React, { useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { EntrySectionData } from "@/interfaces/entry"
import {
  EntrySectionContent,
  EntrySectionDescription,
  EntrySectionImageWrapper,
  EntrySectionTitle,
  EntrySectionWrapper,
} from "./styled"
import { Button } from "@mui/material"

const EntrySection: React.FC<EntrySectionData> = ({
  iconSrc,
  title,
  text,
  button,
  buttonColor,
  buttonVariant,
  pathTo,
  backgroundSrc,
}) => {
  const wrapperRef = useRef<HTMLElement>(null)
  const speed = 0.5

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!wrapperRef.current) return
      const rect = wrapperRef.current.getBoundingClientRect()
      const yOffset = rect.top * speed
      wrapperRef.current.style.backgroundPosition = `center ${-yOffset}px`
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [speed])

  return (
    <EntrySectionWrapper ref={wrapperRef} backgroundSrc={backgroundSrc}>
      <EntrySectionContent>
        <EntrySectionImageWrapper>
          <Image src={iconSrc} alt={title} width={90} height={90} />
        </EntrySectionImageWrapper>
        <EntrySectionTitle>{title}</EntrySectionTitle>
        <EntrySectionDescription>{text}</EntrySectionDescription>
        <Link href={pathTo} style={{ textDecoration: "none" }}>
          <Button variant={buttonVariant} size="big" color={buttonColor}>
            {button}
          </Button>
        </Link>
      </EntrySectionContent>
    </EntrySectionWrapper>
  )
}

export default EntrySection
