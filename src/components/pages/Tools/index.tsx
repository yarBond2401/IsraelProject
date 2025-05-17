"use client"
import React, { useState } from "react"
import Header from "@/components/Header"
import { Box, Button } from "@mui/material"
import {
  DeepFilterButton,
  FilterButton,
  ProjectsButtons,
  ProjectsContainer,
  ProjectsDescription,
  ProjectsHeader,
  ProjectsItems,
  ProjectsTitle,
  ProjectsUpperButtons,
  ProjectsWrapper,
} from "./styled"
import Link from "next/link"
import { CARDS, FILTER_BUTTONS } from "./constants"
import ProjectCard from "./components/ProjectCard"
import Footer from "@/components/Footer"
import ProjectsModal from "./components/ProjectsModal"

const Tools = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState<{
    title: string
    description: string
    redirectTo: string
  } | null>(null)
  return (
    <ProjectsWrapper>
      <Header isOnMainPage={false} />
      <ProjectsContainer>
        <ProjectsHeader>
          <ProjectsTitle>הכלים שמתאימים לרשות שלך</ProjectsTitle>
        </ProjectsHeader>
        <ProjectsUpperButtons>
          <Box
            sx={{
              display: "flex",
              justifySelf: "center",
              textAlign: "center",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {FILTER_BUTTONS.map((button, index) => {
              const isSelected = selectedFilters.includes(button.title)
              return (
                <FilterButton
                  key={index}
                  onClick={() => {
                    setSelectedFilters((prev) =>
                      prev.includes(button.title)
                        ? prev.filter((t) => t !== button.title)
                        : [...prev, button.title]
                    )
                  }}
                  selected={isSelected}
                >
                  {button.title}
                </FilterButton>
              )
            })}
          </Box>
          <DeepFilterButton variant="forward" color="purple">
            פתיחת פרויקט
          </DeepFilterButton>
        </ProjectsUpperButtons>
        <ProjectsItems>
          {CARDS.map((card, index) => (
            <ProjectCard
              key={index}
              {...card}
              onClick={() => {
                setModalData(card.modal)
                setModalOpen(true)
              }}
            />
          ))}
        </ProjectsItems>
        <ProjectsButtons>
          <Link href="/vizualization">
            <Button variant="back">חזור</Button>
          </Link>
          <Link href="/vizualization">
            <Button variant="forward" color="purple" type="submit">
              המשך
            </Button>
          </Link>
        </ProjectsButtons>
      </ProjectsContainer>
      {modalOpen && modalData && (
        <ProjectsModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          {...modalData}
        />
      )}
      <Footer />
    </ProjectsWrapper>
  )
}

export default Tools
