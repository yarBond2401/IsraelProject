"use client"

import { useFormikContext } from "formik"
import { Box } from "@mui/material"
import { FC, useMemo } from "react"
import {
  BackgroundCircle,
  CircleWrapper,
  IndicatorTitle,
  IndicatorValue,
  StyledCircularProgress,
  TextContainer,
} from "./styled"
import { useMediaQuery, useTheme } from "@mui/material"

const Indicator: FC = () => {
  const { values } = useFormikContext<Record<string, string>>()

  const percentage = useMemo(() => {
    const total = 7 * 5 * 2
    const filled = Object.values(values).filter((v) => v !== "").length
    return total === 0 ? 0 : Math.round((filled / total) * 100)
  }, [values])
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))
  const size = isSmallScreen ? 80 : 120
  const thickness = isSmallScreen ? 2 : 3

  return (
    <CircleWrapper>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="progressGradient" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9F59C0" />
            <stop offset="100%" stopColor="#30A8A4" />
          </linearGradient>
        </defs>
      </svg>
      <BackgroundCircle
        variant="determinate"
        value={100}
        size={size}
        thickness={thickness}
      />
      <StyledCircularProgress
        variant="determinate"
        value={percentage}
        size={size}
        thickness={thickness}
      />
      <TextContainer>
        <Box textAlign="center">
          <IndicatorValue variant="h6">{`${percentage}%`}</IndicatorValue>
          <IndicatorTitle>סה כ התקדמות</IndicatorTitle>
        </Box>
      </TextContainer>
    </CircleWrapper>
  )
}

export default Indicator
