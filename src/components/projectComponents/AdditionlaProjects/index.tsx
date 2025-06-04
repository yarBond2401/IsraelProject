"use client"
import React, { useEffect, useState } from "react"
import { Button, Typography } from "@mui/material"
import {
  AdditionalProjectsCards,
  AdditionalProjectsContainer,
  AdditionalProjectsHeader,
  AdditionalProjectsSection,
  AdditionalProjectsWrapper,
} from "./styled"
import Link from "next/link"
import ProjectCard from "@/components/pages/Projects/components/ProjectCard"
import {
  fetchRawProjectsFromSheet,
  normalizeRawRows,
  ProjectRecord,
} from "@/utils/projectsManage"
import { ADDITIONAL_PROJECTS } from "../constants"

interface AdditionalProjectsProps {
  currentProjectId: string
  currentSectionKey: string
  currentFilterKeys: string[]
}

export const AdditionalProjects: React.FC<AdditionalProjectsProps> = ({
  currentProjectId,
  currentSectionKey,
  currentFilterKeys,
}) => {
  const [allRecords, setAllRecords] = useState<ProjectRecord[]>([])

  useEffect(() => {
    fetchRawProjectsFromSheet()
      .then(normalizeRawRows)
      .then((records) => {
        setAllRecords(records.filter((r) => r.id && r.id.length > 0))
      })
      .catch((err) => {
        console.error("Failed to fetch all records in AdditionalProjects:", err)
      })
  }, [])

  const relatedCards = allRecords
    .filter(
      (card) =>
        card.sectionKey.trim() === currentSectionKey.trim() &&
        card.id !== currentProjectId
    )
    .slice(0, 3)

  const additionalCards = allRecords
    .filter(
      (card) =>
        card.id !== currentProjectId &&
        card.filterKeys.some((fk) => currentFilterKeys.includes(fk))
    )
    .slice(0, 3)

  const fallbackCards = allRecords
    .filter((card) => card.id !== currentProjectId)
    .slice(0, 3)

  return (
    <AdditionalProjectsWrapper>
      {ADDITIONAL_PROJECTS.map((section, index) => {
        let cardsToShow: ProjectRecord[] = []
        if (!section.isAdditional) {
          cardsToShow = relatedCards.length ? relatedCards : fallbackCards
        } else {
          cardsToShow = additionalCards.length ? additionalCards : fallbackCards
        }

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
                    <ProjectCard
                      title={card.jsonData.headerTitle}
                      imageSrc="/images/webp/projects/project-5.png"
                    />
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
