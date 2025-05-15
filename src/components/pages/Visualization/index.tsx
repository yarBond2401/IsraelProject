"use client"
import React, { useEffect, useState } from "react"
import Header from "@/components/Header"
import { Box, Button, Typography } from "@mui/material"
import { useTheme, useMediaQuery } from "@mui/material"
import Link from "next/link"
import {
  ChartTitle,
  VisualizationCharts,
  VisualizationContent,
  VisualizationHeader,
  VisualizationWrapper,
} from "./styled"
import VizualizationSelect from "./components/VizualizationSelect"
interface SectionData {
  name: string
  currentAvg: number
  desiredAvg: number
}
interface Participant {
  firstName: string
  lastName: string
}

const SECTORS = 7
const LEVELS = 6
const BASE_RADIUS = 180
const BASE_SIZE = 500
const GAP_ANGLE = 0.03
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
  const angleStart = ANGLE_PER_SECTOR * sectorIndex - Math.PI / 2 + GAP_ANGLE
  const angleEnd =
    ANGLE_PER_SECTOR * (sectorIndex + 1) - Math.PI / 2 - GAP_ANGLE
  const r0 = ((level - 1) / totalLevels) * radius
  const r1 = (level / totalLevels) * radius

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
    const angle = percent * FULL_ANGLE - Math.PI / 2
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

const Visualization = () => {
  const [data, setData] = useState<SectionData[]>([])
  const [participants, setParticipants] = useState<Participant[]>([])
  const [selectedParticipant, setSelectedParticipant] = useState("")
  const [overlay, setOverlay] = useState(false)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  const [_, setWindowWidth] = useState(1000)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const size = isMobile ? 300 : BASE_SIZE
  const RADIUS = isMobile ? 110 : BASE_RADIUS
  const CENTER = size / 2
  useEffect(() => {
    const saved = localStorage.getItem("surveyData")
    if (!saved) return

    const parsed = JSON.parse(saved)
    const processed: SectionData[] = parsed.map((section: any) => {
      const currentNonZero = section.currentValues.filter((v: number) => v > 0)
      const desiredNonZero = section.desiredValues.filter((v: number) => v > 0)

      const currentAvg =
        currentNonZero.length > 0
          ? Math.round(
              currentNonZero.reduce((sum: number, v: number) => sum + v, 0) /
                currentNonZero.length
            )
          : 0

      const desiredAvg =
        desiredNonZero.length > 0
          ? Math.round(
              desiredNonZero.reduce((sum: number, v: number) => sum + v, 0) /
                desiredNonZero.length
            )
          : 0
      return {
        name: section.sectionId,
        currentAvg,
        desiredAvg,
      }
    })

    setData(processed)
  }, [])
  useEffect(() => {
    const storedParticipants = localStorage.getItem("participants")
    if (storedParticipants) {
      setParticipants(JSON.parse(storedParticipants))
    }
  }, [])

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
            value={selectedParticipant}
            onChange={(val) => setSelectedParticipant(val)}
            options={[
              { value: "", label: "בחר משתתף" },
              ...participants.map((p) => ({
                value: `${p.firstName} ${p.lastName}`.trim(),
                label: `${p.firstName} ${p.lastName}`.trim(),
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
                  {data.map((d, sectorIndex) => {
                    const currentFill = roundedLevels(d.currentAvg)
                    return [...Array(currentFill)].map((_, levelIndex) => (
                      <path
                        key={`current-${sectorIndex}-${levelIndex}`}
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
                      />
                    ))
                  })}
                  {drawRings(CENTER, CENTER, RADIUS, LEVELS + 1)}

                  {drawLabels(data, CENTER, CENTER, RADIUS)}
                </svg>
              </Box>
              <Box>
                <ChartTitle>המצב הרצוי</ChartTitle>
                <svg width={size} height={size}>
                  {data.map((d, sectorIndex) => {
                    const desiredFill = roundedLevels(d.desiredAvg)
                    return [...Array(desiredFill)].map((_, levelIndex) => (
                      <path
                        key={`desired-${sectorIndex}-${levelIndex}`}
                        d={drawSector(
                          sectorIndex,
                          levelIndex + 1,
                          LEVELS,
                          RADIUS,
                          CENTER,
                          CENTER
                        )}
                        fill="#9c27b0"
                        fillOpacity={1}
                      />
                    ))
                  })}
                  {drawRings(CENTER, CENTER, RADIUS, LEVELS + 1)}

                  {drawLabels(data, CENTER, CENTER, RADIUS)}
                </svg>
              </Box>
            </>
          )}

          {overlay && (
            <Box sx={{ backgroundColor: "#fff" }}>
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
                {drawRings(CENTER, CENTER, RADIUS, LEVELS + 1)}

                {drawLabels(data, CENTER, CENTER, RADIUS)}
              </svg>
            </Box>
          )}
        </VisualizationCharts>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
            backgroundColor: "#fff",
            paddingBlockEnd: "30px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Button
            variant="forward"
            color="green"
            onClick={() => setOverlay((prev) => !prev)}
          >
            {overlay ? "הצג גרפים בנפרד" : "השווה בין מצבים"}
          </Button>
          {overlay && (
            <Link href="/tools">
              <Button variant="forward" color="purple">
                כלים בשבילך
              </Button>
            </Link>
          )}
        </Box>
      </VisualizationContent>
    </VisualizationWrapper>
  )
}

export default Visualization
