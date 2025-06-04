"use client"

import React, { useEffect, useState, useCallback } from "react"
import Header from "@/components/Header"
import { Box, Button } from "@mui/material"
import Link from "next/link"
import { useAuth } from "@/contexts/AuthContext"
import LoadingScreen from "@/components/LoadingScreen"
import { getAnswers } from "@/utils/questionnaireManage"
import { computeSectionScores } from "@/utils/toolsUtils"

import {
  fetchRawToolsFromSheet,
  normalizeToolRows,
  ToolRecord,
} from "@/utils/toolsManage"

import {
  FilterButton,
  ProjectsWrapper,
  ProjectsContainer,
  ProjectsHeader,
  ProjectsTitle,
  ProjectsUpperButtons,
  ProjectsItems,
  ProjectsButtons,
} from "./styled"
import ProjectCard from "./components/ProjectCard"
import ProjectsModal from "./components/ProjectsModal"
import Footer from "@/components/Footer"

interface ModalData {
  title: string
  description: string
  redirectTo: string
}

export default function ToolsPage() {
  const { user: muni } = useAuth()

  const [allTools, setAllTools] = useState<ToolRecord[]>([])

  const [eligibleToolIds, setEligibleToolIds] = useState<Set<string>>(new Set())

  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const [isLoading, setIsLoading] = useState(true)

  const [modalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState<ModalData | null>(null)

  useEffect(() => {
    fetchRawToolsFromSheet()
      .then(normalizeToolRows)
      .then((records) => {
        setAllTools(records)
      })
      .catch((err) => {
        console.error("Error fetching or normalizing tools sheet:", err)
      })
  }, [])

  useEffect(() => {
    if (!muni) {
      setEligibleToolIds(new Set())
      setSelectedFilters(["הכל"])
      setIsLoading(false)
      return
    }

    if (allTools.length === 0) {
      return
    }

    getAnswers(muni)
      .then((answers) => {
        const hasAny = Object.values(answers).some((v) => Number(v) > 0)
        if (!hasAny) {
          setEligibleToolIds(new Set())
          setSelectedFilters(["הכל"])
          setIsLoading(false)
          return
        }

        const scores = computeSectionScores(answers)

        const passing = new Set<string>()
        allTools.forEach((tool) => {
          const sec = scores[tool.sectionKey.trim()]
          if (!sec) return

          if (sec.current === 0 && sec.desired === 0) return

          if (sec.score <= tool.threshold) {
            passing.add(tool.id)
          }
        })
        setEligibleToolIds(passing)

        const tags = new Set<string>()
        allTools.forEach((tool) => {
          if (passing.has(tool.id)) {
            tags.add(tool.filterKey)
          }
        })

        if (tags.size === 0) {
          setSelectedFilters(["הכל"])
        } else {
          setSelectedFilters(Array.from(tags))
        }
      })
      .catch((err) => {
        console.error("Error computing eligibility:", err)
        setEligibleToolIds(new Set())
        setSelectedFilters(["הכל"])
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [muni, allTools])

  useEffect(() => {
    if (!isLoading && selectedFilters.length === 0) {
      setSelectedFilters(["הכל"])
    }
  }, [selectedFilters, isLoading])

  const handleFilterToggle = useCallback((title: string) => {
    setSelectedFilters((prev) => {
      if (title === "הכל") {
        return ["הכל"]
      }
      const base = prev.filter((t) => t !== "הכל")
      if (base.includes(title)) {
        const next = base.filter((t) => t !== title)
        return next.length ? next : ["הכל"]
      } else {
        return [...base, title]
      }
    })
  }, [])

  const displayedTools = allTools.filter((tool) => {
    if (selectedFilters.includes("הכל")) {
      return true
    }
    if (eligibleToolIds.has(tool.id)) {
      return true
    }
    return selectedFilters.includes(tool.filterKey)
  })

  if (isLoading) {
    return <LoadingScreen />
  }

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
              gap: 2,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <FilterButton
              selected={selectedFilters.includes("הכל")}
              onClick={() => handleFilterToggle("הכל")}
            >
              הכל
            </FilterButton>

            {Array.from(new Set(allTools.map((t) => t.filterKey))).map(
              (btnTitle) => {
                const isSel = selectedFilters.includes(btnTitle)
                return (
                  <FilterButton
                    key={btnTitle}
                    selected={isSel}
                    onClick={() => handleFilterToggle(btnTitle)}
                  >
                    {btnTitle}
                  </FilterButton>
                )
              }
            )}
          </Box>
        </ProjectsUpperButtons>

        <ProjectsItems>
          {displayedTools.map((tool) => (
            <ProjectCard
              key={tool.id}
              title={tool.title}
              imageSrc={`/images/webp/tools/tool-1.png`}
              onClick={() => {
                setModalData({
                  title: tool.title,
                  description:
                    tool.jsonData.mainArticles?.[0]?.description || "",
                  redirectTo: `/tool/${tool.id}`,
                })
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
