import { Button, Typography } from "@mui/material"
import {
  AdditionalProjectsCards,
  AdditionalProjectsContainer,
  AdditionalProjectsHeader,
  AdditionalProjectsSection,
  AdditionalProjectsWrapper,
} from "./styled"
import { ADDITIONAL_PROJECTS } from "../constants"
import { CARDS } from "@/components/pages/Projects/constants"
import Link from "next/link"
import ProjectCard from "@/components/pages/Projects/components/ProjectCard"
interface AdditionalProjectsProps {
  currentProjectId: string
  currentFilterKey: string
}

export const AdditionalProjects: React.FC<AdditionalProjectsProps> = ({
  currentProjectId,
  currentFilterKey,
}) => {
  const relatedCards = CARDS.filter(
    (card) =>
      card.filterKey === currentFilterKey && card.id !== currentProjectId
  ).slice(0, 3)

  const additionalCards = CARDS.filter(
    (card) =>
      card.filterKey !== currentFilterKey && card.id !== currentProjectId
  ).slice(0, 3)

  const fallbackCards = CARDS.filter(
    (card) => card.id !== currentProjectId
  ).slice(0, 3)

  return (
    <AdditionalProjectsWrapper>
      {ADDITIONAL_PROJECTS.map((section, index) => {
        const cardsToShow = section.isAdditional
          ? additionalCards
          : relatedCards.length
          ? relatedCards
          : fallbackCards

        return (
          <AdditionalProjectsSection
            key={index}
            isAdditional={section.isAdditional}
          >
            <AdditionalProjectsContainer>
              <AdditionalProjectsHeader>
                <Typography sx={{ color: "#000" }}>{section.title}</Typography>
                <Link href="/projects">
                  <Button variant="forward" color="green">
                    {section.button}
                  </Button>
                </Link>
              </AdditionalProjectsHeader>
              <AdditionalProjectsCards>
                {cardsToShow.map((card) => (
                  <Link
                    key={card.id}
                    href={`/project/${card.id}`}
                    passHref
                    style={{ display: "block", width: "100%" }}
                  >
                    <ProjectCard {...card} />
                  </Link>
                ))}
              </AdditionalProjectsCards>
            </AdditionalProjectsContainer>
          </AdditionalProjectsSection>
        )
      })}
    </AdditionalProjectsWrapper>
  )
}
