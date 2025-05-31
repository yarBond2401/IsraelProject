"use client"

import React, { useEffect, useState } from "react"
import Header from "@/components/Header"
import { Button } from "@mui/material"
import {
  FilterButton,
  ProjectsButtons,
  ProjectsContainer,
  ProjectsHeader,
  ProjectsItems,
  ProjectsTitle,
  ProjectsUpperButtons,
  ProjectsWrapper,
} from "./styled"
import Link from "next/link"
import { useAuth } from "@/contexts/AuthContext"
import { getAnswers } from "@/utils/questionnaireManage"
import { computeSectionScores } from "@/utils/toolsUtils"
import { CARDS, FILTER_BUTTONS } from "./constants"
import ProjectCard from "./components/ProjectCard"
import Footer from "@/components/Footer"
import ProjectsModal from "./components/ProjectsModal"
import LoadingScreen from "@/components/LoadingScreen"
interface ModalData {
  title: string
  description: string
  redirectTo: string
}
export default function Tools() {
  const { user: muni } = useAuth()

  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState<ModalData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!muni) return

    getAnswers(muni).then((answers) => {
      const hasAny = Object.values(answers).some((v) => Number(v) > 0)
      if (!hasAny) {
        setSelectedFilters(["הכל"])
        setIsLoading(false)
        return
      }

      const scores = computeSectionScores(answers)
      const passedTitles = new Set(
        CARDS.filter((c) => {
          const sec = scores[c.sectionKey]
          if (!sec || (sec.current === 0 && sec.desired === 0)) return false
          return sec.score <= c.minScore
        }).map((c) => c.title)
      )

      const tags = new Set<string>()
      CARDS.forEach((c) => {
        if (passedTitles.has(c.title)) {
          c.filterMatch.forEach((t) => tags.add(t))
        }
      })

      setSelectedFilters(tags.size ? [...tags] : ["הכל"])
      setIsLoading(false)
    })
  }, [muni])

  if (isLoading) {
    return <LoadingScreen />
  }

  const displayedCards = CARDS.filter((c) => {
    if (selectedFilters.includes("הכל")) return true
    return c.filterMatch.some((tag) => selectedFilters.includes(tag))
  })

  return (
    <ProjectsWrapper>
      <Header isOnMainPage={false} />

      <ProjectsContainer>
        <ProjectsHeader>
          <ProjectsTitle>הכלים שמתאימים לרשות שלך</ProjectsTitle>
        </ProjectsHeader>

        <ProjectsUpperButtons>
          {/* <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          > */}
          {FILTER_BUTTONS.map((btn, i) => {
            const isSel = selectedFilters.includes(btn.title)
            return (
              <FilterButton
                key={i}
                selected={isSel}
                onClick={() => {
                  if (btn.title === "הכל") {
                    setSelectedFilters(["הכל"])
                  } else {
                    const base = selectedFilters.filter((t) => t !== "הכל")
                    const next = isSel
                      ? base.filter((t) => t !== btn.title)
                      : [...base, btn.title]
                    setSelectedFilters(next.length ? next : ["הכל"])
                  }
                }}
              >
                {btn.title}
              </FilterButton>
            )
          })}
          {/* </Box> */}
          {/* 
          <DeepFilterButton variant="forward" color="purple">
            פתיחת פרויקט
          </DeepFilterButton> */}
        </ProjectsUpperButtons>

        <ProjectsItems>
          {displayedCards.map((card, idx) => (
            <ProjectCard
              key={idx}
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
            <Button variant="forward" color="purple">
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
