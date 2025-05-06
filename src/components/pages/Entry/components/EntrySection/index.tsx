import React from "react"
import Header from "@/components/Header"
import { Box, Typography } from "@mui/material"
import Link from "next/link"
import Image from "next/image"
import { EntrySectionData } from "@/interfaces/entry"
import {
  EntrySectionBackground,
  EntrySectionButton,
  EntrySectionContent,
  EntrySectionDescription,
  EntrySectionImageWrapper,
  EntrySectionTitle,
  EntrySectionWrapper,
} from "./styled"

const EntrySection: React.FC<EntrySectionData> = ({
  iconSrc,
  title,
  text,
  button,
  buttonBackground,
  pathTo,
  backgroundSrc,
}) => {
  return (
    <EntrySectionWrapper>
      <EntrySectionContent>
        <EntrySectionImageWrapper>
          <Image src={iconSrc} alt={title} width={90} height={90} />
        </EntrySectionImageWrapper>
        <EntrySectionTitle>{title}</EntrySectionTitle>
        <EntrySectionDescription>{text}</EntrySectionDescription>
        <Link href={pathTo} style={{ textDecoration: "none" }}>
          <EntrySectionButton sx={{ backgroundColor: buttonBackground }}>
            {button}
          </EntrySectionButton>
        </Link>
      </EntrySectionContent>
      <EntrySectionBackground src={backgroundSrc} alt="background-image" fill />
    </EntrySectionWrapper>
  )
}

export default EntrySection
