"use client"

import React, { useEffect, useState, useCallback } from "react"
import Header from "@/components/Header"
import { Box, Button } from "@mui/material"
import Link from "next/link"
import { useAuth } from "@/contexts/AuthContext"

import {
  FilterButton,
  ProjectsButtons,
  ProjectsContainer,
  ProjectsItems,
  ProjectsTitle,
  ProjectsUpperButtons,
  ProjectsWrapper,
} from "./styled"

import ProjectCard from "@/components/pages/Projects/components/ProjectCard"
import Footer from "@/components/Footer"
import LoadingScreen from "@/components/LoadingScreen"

import {
  fetchRawProjectsFromSheet,
  normalizeRawRows,
  ProjectRecord,
} from "@/utils/projectsManage"
import { getAnswers } from "@/utils/questionnaireManage"
import { computeSectionScores } from "@/utils/toolsUtils"

export default function ProjectsPage() {
  const { user: municipality } = useAuth()

  const [allProjects, setAllProjects] = useState<ProjectRecord[]>([])
  const [eligibleIds, setEligibleIds] = useState<Set<string>>(new Set())
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["הכל"])
  const [availableFilterKeys, setAvailableFilterKeys] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchRawProjectsFromSheet()
      .then(normalizeRawRows)
      .then((records) => {
        setAllProjects(records)
      })
      .catch((err) => {
        console.error("Error fetching or normalizing sheet:", err)
      })
  }, [])

  useEffect(() => {
    if (!municipality) {
      setEligibleIds(new Set())
      setSelectedFilters(["הכל"])
      setAvailableFilterKeys([])
      setIsLoading(false)
      return
    }
    if (allProjects.length === 0) {
      return
    }

    getAnswers(municipality)
      .then((answers) => {
        const hasAny = Object.values(answers).some((v) => Number(v) > 0)
        if (!hasAny) {
          setEligibleIds(new Set())
          setSelectedFilters(["הכל"])
          setAvailableFilterKeys([])
          setIsLoading(false)
          return
        }

        const scores = computeSectionScores(answers)

        const passing = new Set<string>()
        allProjects.forEach((proj) => {
          const sec = scores[proj.sectionKey.trim()]
          if (!sec) return

          const sectionScore = sec?.score ?? 0
          if (sectionScore >= proj.threshold) {
            passing.add(proj.id)
          }
        })
        setEligibleIds(passing)

        if (passing.size === 0) {
          setAvailableFilterKeys([])
          setSelectedFilters(["הכל"])
          setIsLoading(false)
          return
        }

        const eligibleFilterKeys = new Set<string>()
        allProjects.forEach((proj) => {
          if (passing.has(proj.id)) {
            proj.filterKeys.forEach((fk) => eligibleFilterKeys.add(fk))
          }
        })

        const availableKeys = Array.from(eligibleFilterKeys)
        setAvailableFilterKeys(availableKeys)

        setSelectedFilters([...availableKeys])
      })
      .catch((err) => {
        console.error("Error getting answers:", err)
        setEligibleIds(new Set())
        setSelectedFilters(["הכל"])
        setAvailableFilterKeys([])
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [municipality, allProjects])

  // const handleFilterToggle = useCallback((title: string) => {
  //   setSelectedFilters((prev) => {
  //     if (title === "הכל") {
  //       return ["הכל"]
  //     }

  //     const baseFilters = prev.filter((t) => t !== "הכל")

  //     if (baseFilters.includes(title)) {
  //       const newFilters = baseFilters.filter((t) => t !== title)
  //       return newFilters.length ? newFilters : ["הכל"]
  //     } else {
  //       return [...baseFilters, title]
  //     }
  //   })
  // }, [])
  const handleFilterToggle = useCallback((title: string) => {
    setSelectedFilters((prev) => {
      if (title === "הכל") {
        return ["הכל"]
      }

      const baseFilters = prev.filter((t) => t !== "הכל")

      if (baseFilters.includes(title)) {
        const newFilters = baseFilters.filter((t) => t !== title)
        return newFilters.length ? newFilters : ["הכל"]
      } else {
        return [...baseFilters, title]
      }
    })
  }, [])

  const displayed = allProjects.filter((proj) => {
    if (selectedFilters.includes("הכל")) {
      if (eligibleIds.size > 0) {
        return eligibleIds.has(proj.id)
      }
      return true
    }

    if (eligibleIds.size > 0) {
      return (
        eligibleIds.has(proj.id) &&
        proj.filterKeys.some((fk) => selectedFilters.includes(fk))
      )
    }

    return proj.filterKeys.some((fk) => selectedFilters.includes(fk))
  })

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <ProjectsWrapper>
      <Header isOnMainPage={false} />

      <ProjectsContainer>
        <ProjectsTitle>מצאנו את כל הפרויקטים שמתאימים לך</ProjectsTitle>

        <ProjectsUpperButtons>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
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

            {Array.from(new Set(allProjects.flatMap((p) => p.filterKeys)))
              .filter((btnTitle) => {
                if (eligibleIds.size === 0) {
                  return true
                }
                return availableFilterKeys.includes(btnTitle)
              })
              .map((btnTitle) => {
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
              })}
          </Box>
        </ProjectsUpperButtons>

        <ProjectsItems>
          {displayed.map((proj) => (
            <Link
              key={proj.id}
              href={`/project/${proj.id}`}
              passHref
              style={{ display: "block", width: "100%" }}
            >
              <ProjectCard
                title={proj.jsonData.headerTitle}
                imageSrc="/images/webp/projects/project-1.png"
              />
            </Link>
          ))}
        </ProjectsItems>

        <ProjectsButtons>
          <Link href="/diagnostic">
            <Button variant="back">חזור</Button>
          </Link>
          <Link href="/vizualization">
            <Button variant="forward" color="green">
              המשך
            </Button>
          </Link>
        </ProjectsButtons>
      </ProjectsContainer>

      <Footer />
    </ProjectsWrapper>
  )
}
