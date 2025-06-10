"use client"

import React, { useEffect, useState } from "react"
import Header from "@/components/Header"
import { Box, Button, Typography } from "@mui/material"
import { useTheme, useMediaQuery } from "@mui/material"
import Link from "next/link"
import { useAuth } from "@/contexts/AuthContext"
import {
  ChartTitle,
  ChartTitleGreen,
  VisualizationCharts,
  VisualizationContent,
  VisualizationHeader,
  VisualizationWrapper,
} from "./styled"
import VizualizationSelect from "./components/VizualizationSelect"
import { getAnswers } from "@/utils/questionnaireManage"
import {
  getSavedParticipants,
  getSavedParticipant,
  SavedParticipant,
} from "@/utils/participnatsManage"
import { FORM_ROWS } from "../Questionnaire/constants"

interface SectionData {
  name: string
  currentAvg: number
  desiredAvg: number
}
const SECTORS = FORM_ROWS.length
const LEVELS = 6
const BASE_SIZE = 500
const BASE_RADIUS = 180
const FULL_ANGLE = 2 * Math.PI
const ANGLE_PER_SECTOR = FULL_ANGLE / SECTORS

const roundedLevels = (avg: number) => Math.round(avg)
const polarToCartesian = (
  radius: number,
  angle: number,
  cx: number,
  cy: number
) => {
  return {
    x: cx + radius * Math.cos(angle),
    y: cy + radius * Math.sin(angle),
  }
}

const drawSector = (
  sectorIndex: number,
  level: number,
  totalLevels: number,
  radius: number,
  cx: number,
  cy: number
) => {
  const visualTotal = totalLevels + 1

  const angleStart = ANGLE_PER_SECTOR * sectorIndex - Math.PI / 2
  const angleEnd = ANGLE_PER_SECTOR * (sectorIndex + 1) - Math.PI / 2

  const r0 = (level / visualTotal) * radius
  const r1 = ((level + 1) / visualTotal) * radius

  const p1 = polarToCartesian(r0, angleStart, cx, cy)
  const p2 = polarToCartesian(r0, angleEnd, cx, cy)
  const p3 = polarToCartesian(r1, angleEnd, cx, cy)
  const p4 = polarToCartesian(r1, angleStart, cx, cy)

  const largeArcFlag = angleEnd - angleStart > Math.PI ? 1 : 0

  return `
    M ${p1.x},${p1.y}
    A ${r0} ${r0} 0 ${largeArcFlag} 1 ${p2.x},${p2.y}
    L ${p3.x},${p3.y}
    A ${r1} ${r1} 0 ${largeArcFlag} 0 ${p4.x},${p4.y}
    Z
  `
}

const drawSectorDividers = (
  cx: number,
  cy: number,
  radius: number,
  sectors: number
) => {
  const lines = []
  for (let i = 0; i < sectors; i++) {
    const angle = ANGLE_PER_SECTOR * i - Math.PI / 2
    const end = polarToCartesian(radius, angle, cx, cy)
    lines.push(
      <line
        key={`divider-${i}`}
        x1={cx}
        y1={cy}
        x2={end.x}
        y2={end.y}
        stroke="#fff"
        strokeWidth={5}
      />
    )
  }
  return lines
}
const drawRings = (cx: number, cy: number, radius: number, count: number) => {
  const rings = []
  for (let i = 1; i <= count; i++) {
    const r = (i / count) * radius
    rings.push(
      <circle
        key={`ring-${i}`}
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="#000"
        strokeWidth={1}
      />
    )
  }
  return rings
}

const drawLabels = (
  data: SectionData[],
  cx: number,
  cy: number,
  radius: number
) => {
  return data.map((section, i) => {
    const percent = i / SECTORS
    const angle = percent * FULL_ANGLE - Math.PI / 2.8
    const x = cx + (radius + 8) * Math.cos(angle)
    const y = cy + (radius + 8) * Math.sin(angle)
    const rotate = (angle * 180) / Math.PI + 90
    return (
      <text
        key={`label-${i}`}
        x={x}
        y={y}
        fill="#a83b96"
        fontSize={14}
        textAnchor="middle"
        transform={`rotate(${rotate}, ${x}, ${y})`}
      >
        {section.name}
      </text>
    )
  })
}

export default function Visualization() {
  const { user: municipality } = useAuth()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const size = isMobile ? 300 : BASE_SIZE
  const RADIUS = isMobile ? 110 : BASE_RADIUS
  const CENTER = size / 2

  const [defaultData, setDefaultData] = useState<
    {
      name: string
      currentAvg: number
      desiredAvg: number
    }[]
  >([])

  const [participants, setParticipants] = useState<SavedParticipant[]>([])
  const [selected, setSelected] = useState<string>("")

  const [data, setData] = useState(defaultData)

  const [overlay, setOverlay] = useState(false)
  const [animateDesired, setAnimateDesired] = useState(false)
  const [animateCurrent, setAnimateCurrent] = useState(false)
  const [tooltip, setTooltip] = useState<{
    x: number
    y: number
    content: string
  } | null>(null)

  useEffect(() => {
    if (!municipality) return
    getAnswers(municipality).then((answers) => {
      const sections = FORM_ROWS.map((row, i) => {
        const cur: number[] = []
        const des: number[] = []
        row.expanded.forEach((_, j) => {
          const rawC = answers[`row${i + 1}_select1_item${j + 1}`]
          if (rawC !== "" && rawC != null) {
            const c = Number(rawC)
            if (!isNaN(c)) cur.push(c)
          }

          const rawD = answers[`row${i + 1}_select2_item${j + 1}`]
          if (rawD !== "" && rawD != null) {
            const d = Number(rawD)
            if (!isNaN(d)) des.push(d)
          }
        })
        const currentAvg = cur.length
          ? Math.round(cur.reduce((a, v) => a + v, 0) / cur.length)
          : 0
        const desiredAvg = des.length
          ? Math.round(des.reduce((a, v) => a + v, 0) / des.length)
          : 0
        return { name: row.title, currentAvg, desiredAvg }
      })
      setDefaultData(sections)
      setData(sections)
    })
  }, [municipality])

  useEffect(() => {
    if (!municipality) return
    getSavedParticipants().then(setParticipants)
  }, [municipality])

  useEffect(() => {
    if (!selected) {
      setData(defaultData)
      return
    }
    setData(defaultData.map((s) => ({ ...s, currentAvg: 0, desiredAvg: 0 })))
    setTooltip(null)
    getSavedParticipant(selected).then((p) => {
      if (!p) {
        setData(defaultData)
        return
      }
      const answers = p.answers
      const sections = FORM_ROWS.map((row, i) => {
        const cur: number[] = []
        const des: number[] = []
        row.expanded.forEach((_, j) => {
          const rawC = answers[`row${i + 1}_select1_item${j + 1}`]
          if (rawC !== "" && rawC != null) {
            const c = Number(rawC)
            if (!isNaN(c)) cur.push(c)
          }

          const rawD = answers[`row${i + 1}_select2_item${j + 1}`]
          if (rawD !== "" && rawD != null) {
            const d = Number(rawD)
            if (!isNaN(d)) des.push(d)
          }
        })
        const currentAvg = cur.length
          ? Math.round(cur.reduce((a, v) => a + v, 0) / cur.length)
          : 0
        const desiredAvg = des.length
          ? Math.round(des.reduce((a, v) => a + v, 0) / des.length)
          : 0
        return { name: row.title, currentAvg, desiredAvg }
      })
      setData(sections)
    })
  }, [selected, defaultData])

  const handleOverlayToggle = () => {
    if (!overlay) {
      setAnimateDesired(false)
      setAnimateCurrent(false)
      setOverlay(true)
      setTimeout(() => setAnimateDesired(true), 100)
      setTimeout(() => setAnimateCurrent(true), 800)
    } else {
      setOverlay(false)
      setAnimateDesired(false)
      setAnimateCurrent(false)
    }
  }

  const handleHover = (idx: number, value: number) => (e: React.MouseEvent) => {
    setTooltip({
      x: e.clientX,
      y: e.clientY,
      content: `${data[idx].name}: ${value}`,
    })
  }

  return (
    <VisualizationWrapper>
      <Header isOnMainPage={false} />
      <VisualizationContent>
        <VisualizationHeader>
          <Box sx={{ display: "flex", gap: "15px" }}>
            <Typography
              sx={{
                color: "#a83b96",
                fontWeight: 700,
                fontSize: { xs: "14px", md: "18px" },
              }}
            >
              תוצאות השאלון
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12px", md: "14px" },
                maxInlineSize: "600px",
                color: "#aeb1b0",
              }}
            >
              במצב הקיים, ככל שיופיעו יותר פסים צבועים במימד מסוים, כך נדע
              ששביעות הרצון גבוהה יותר. במצב הרצוי, ככל שיהיו יותר פסים צבועים
              במימד מסוים, כך השאיפה להרגיש אותו גבוהה יותר.
            </Typography>
          </Box>
          <VizualizationSelect
            value={selected}
            onChange={setSelected}
            options={[
              { value: "", label: "ברירת מחדל" },
              ...participants.map((p) => ({
                value: p.id,
                label: `${p.firstName} ${p.lastName}`,
              })),
            ]}
          />
        </VisualizationHeader>

        <VisualizationCharts>
          {!overlay && (
            <>
              <Box>
                <ChartTitle>המצב הקיים</ChartTitle>
                <svg width={size} height={size}>
                  {data.map((d, sec) =>
                    [...Array(roundedLevels(d.currentAvg))].map((_, lvl) => (
                      <path
                        key={`cur-${sec}-${lvl}`}
                        d={drawSector(
                          sec,
                          lvl + 1,
                          LEVELS,
                          RADIUS,
                          CENTER,
                          CENTER
                        )}
                        fill="#9c27b0"
                        onMouseMove={handleHover(sec, d.currentAvg)}
                        onMouseLeave={() => setTooltip(null)}
                        style={{
                          transformOrigin: `${CENTER}px ${CENTER}px`,
                          transform: "scale(0)",
                          animation: "sectorGrow 0.8s ease-out forwards",
                        }}
                      />
                    ))
                  )}
                  {drawSectorDividers(CENTER, CENTER, RADIUS, SECTORS)}
                  {drawRings(CENTER, CENTER, RADIUS, LEVELS + 1)}
                  {drawLabels(data, CENTER, CENTER, RADIUS)}
                </svg>
                {tooltip && (
                  <Box
                    sx={{
                      position: "fixed",
                      top: tooltip.y + 10,
                      left: tooltip.x + 10,
                      backgroundColor: "#fff",
                      color: "#a83b96",
                      padding: "8px 14px",
                      borderRadius: "8px",
                      fontWeight: 600,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                      pointerEvents: "none",
                      fontSize: "14px",
                    }}
                  >
                    {tooltip.content}
                  </Box>
                )}
              </Box>

              <Box>
                <ChartTitleGreen>המצב הרצוי</ChartTitleGreen>
                <svg width={size} height={size}>
                  {data.map((d, sec) =>
                    [...Array(roundedLevels(d.desiredAvg))].map((_, lvl) => (
                      <path
                        key={`des-${sec}-${lvl}`}
                        d={drawSector(
                          sec,
                          lvl + 1,
                          LEVELS,
                          RADIUS,
                          CENTER,
                          CENTER
                        )}
                        fill="#15b0a1"
                        onMouseMove={handleHover(sec, d.desiredAvg)}
                        onMouseLeave={() => setTooltip(null)}
                        style={{
                          transformOrigin: `${CENTER}px ${CENTER}px`,
                          transform: "scale(0)",
                          animation: "sectorGrow 0.8s ease-out forwards",
                        }}
                      />
                    ))
                  )}
                  {drawSectorDividers(CENTER, CENTER, RADIUS, SECTORS)}
                  {drawRings(CENTER, CENTER, RADIUS, LEVELS + 1)}
                  {drawLabels(data, CENTER, CENTER, RADIUS)}
                </svg>
              </Box>
            </>
          )}

          {overlay && (
            <Box sx={{ backgroundColor: "#fff", position: "relative" }}>
              <ChartTitle>זהוי ערכים</ChartTitle>
              <Typography fontWeight={700} color="#a83b96"></Typography>
              <svg width={size} height={size}>
                {data.map((d, sectorIndex) => {
                  const desiredFill = roundedLevels(d.desiredAvg)
                  return [...Array(desiredFill)].map((_, levelIndex) => (
                    <path
                      key={`merged-desired-${sectorIndex}-${levelIndex}`}
                      d={drawSector(
                        sectorIndex,
                        levelIndex + 1,
                        LEVELS,
                        RADIUS,
                        CENTER,
                        CENTER
                      )}
                      fill="#9c27b0"
                      fillOpacity={0.5}
                      onMouseEnter={() => {}}
                      onMouseLeave={() => setTooltip(null)}
                      onMouseMove={(e) => {
                        const section = data[sectorIndex]
                        setTooltip({
                          x: e.clientX,
                          y: e.clientY,
                          content: `${section.name}: קיים - ${section.currentAvg} | רצוי - ${section.desiredAvg}`,
                        })
                      }}
                      style={{
                        opacity: animateDesired ? 0.5 : 0,
                        transition: "opacity 0.6s ease-in-out",
                      }}
                    />
                  ))
                })}
                <g>
                  {data.map((d, sectorIndex) => {
                    const currentFill = roundedLevels(d.currentAvg)
                    return [...Array(currentFill)].map((_, levelIndex) => (
                      <path
                        key={`merged-current-${sectorIndex}-${levelIndex}`}
                        d={drawSector(
                          sectorIndex,
                          levelIndex + 1,
                          LEVELS,
                          RADIUS,
                          CENTER,
                          CENTER
                        )}
                        fill="#15b0a1"
                        fillOpacity={1}
                        style={{
                          opacity: animateCurrent ? 1 : 0,
                          transform: animateCurrent ? "scale(1)" : "scale(0.6)",
                          transition: "all 0.6s ease-in-out",
                          transformOrigin: `${CENTER}px ${CENTER}px`,
                        }}
                      />
                    ))
                  })}
                </g>
                <g
                  style={{
                    transform: "translateX(0%)",
                    transition: "transform 0.8s ease-in-out",
                  }}
                ></g>
                {drawSectorDividers(CENTER, CENTER, RADIUS, SECTORS)}

                {drawRings(CENTER, CENTER, RADIUS, LEVELS + 1)}

                {drawLabels(data, CENTER, CENTER, RADIUS)}
              </svg>
              {tooltip && (
                <Box
                  sx={{
                    position: "fixed",
                    top: tooltip.y + 10,
                    left: tooltip.x + 10,
                    backgroundColor: "#fff",
                    color: "#a83b96",
                    padding: "8px 14px",
                    borderRadius: "8px",
                    fontWeight: 600,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    zIndex: 9999,
                    pointerEvents: "none",
                    transition: "opacity 0.2s ease-in-out",
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tooltip.content}
                </Box>
              )}
            </Box>
          )}
        </VisualizationCharts>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            backgroundColor: "#fff",
            p: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Button variant="forward" color="green" onClick={handleOverlayToggle}>
            {overlay ? "הצג גרפים בנפרד" : "השווה בין מצבים"}
          </Button>
          {overlay && (
            <Link href="/tools">
              <Button variant="forward" color="purple">
                כלים בשבילך
              </Button>
            </Link>
          )}
          <Link href="/participants">
            <Button variant="back">חזור</Button>
          </Link>
        </Box>
      </VisualizationContent>
    </VisualizationWrapper>
  )
}
