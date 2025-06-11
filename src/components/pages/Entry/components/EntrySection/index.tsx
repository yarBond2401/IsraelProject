import React from "react"
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
  return (
    <EntrySectionWrapper backgroundSrc={backgroundSrc}>
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
