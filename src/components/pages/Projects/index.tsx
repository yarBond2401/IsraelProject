"use client"
import React, { useState } from "react"
import Header from "@/components/Header"
import { Box, Button, Typography } from "@mui/material"

import Image from "next/image"
import {
  BackButton,
  DeepFilterButton,
  FilterButton,
  FurtherButton,
  ProjectsButtons,
  ProjectsContainer,
  ProjectsHeader,
  ProjectsItems,
  ProjectsTitle,
  ProjectsUpperButtons,
  ProjectsWrapper,
} from "./styled"
import Link from "next/link"
import { CARDS, CardsProps, FILTER_BUTTONS } from "./constants"
import ProjectCard from "./components/ProjectCard"
import Footer from "@/components/Footer"

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("all")

  const filteredCards =
    selectedFilter === "all"
      ? CARDS
      : CARDS.filter((card) => card.filterKey === selectedFilter)

  return (
    <ProjectsWrapper>
      <Header isOnMainPage={false} />
      <ProjectsContainer>
        <ProjectsHeader>
          <ProjectsTitle>מצאנו את כל הפרויקטים שמתאימים לך</ProjectsTitle>
        </ProjectsHeader>
        <ProjectsUpperButtons>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {FILTER_BUTTONS.map((button, index) => (
              <FilterButton
                key={index}
                onClick={() => setSelectedFilter(button.filterKey)}
                selected={selectedFilter === button.filterKey}
              >
                {button.title}
              </FilterButton>
            ))}
          </Box>
          <DeepFilterButton>פתיחת פרויקט</DeepFilterButton>
        </ProjectsUpperButtons>

        <ProjectsItems>
          {filteredCards.map((card) => (
            <Link
              key={card.id}
              href={`/project/${card.id}`}
              passHref
              style={{ display: "block", width: "100%", height: "100%" }}
            >
              <ProjectCard {...card} />
            </Link>
          ))}
        </ProjectsItems>

        <ProjectsButtons>
          <Link href="/vizualization">
            <BackButton>חזור</BackButton>
          </Link>
          <Link href="/vizualization">
            <FurtherButton type="submit">המשך</FurtherButton>
          </Link>
        </ProjectsButtons>
      </ProjectsContainer>
      <Footer />
    </ProjectsWrapper>
  )
}

export default Projects
